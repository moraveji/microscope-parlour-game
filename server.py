#!/usr/bin/env python3
"""Local-only party server. No external dependencies or internet required."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from http.client import HTTPConnection, HTTPException
from pathlib import Path
import argparse
import errno
import subprocess
import os

URL = 'http://localhost:8765'

class Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

def party_is_running():
    connection = HTTPConnection('127.0.0.1', 8765, timeout=2)
    try:
        connection.request('GET', '/')
        response = connection.getresponse()
        content = response.read(65536)
        return response.status == 200 and b'Microscope Parlour Game</title>' in content and b'id="app"' in content
    except (OSError, ValueError, HTTPException):
        return False
    finally:
        connection.close()

def open_chrome():
    subprocess.run(['/usr/bin/open', '-a', 'Google Chrome', URL], check=False)

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--no-open', action='store_true')
    args = parser.parse_args()
    os.chdir(Path(__file__).resolve().parent)
    try:
        server = ThreadingHTTPServer(('127.0.0.1', 8765), Handler)
    except OSError as error:
        if error.errno == errno.EADDRINUSE and party_is_running():
            print('The party app is already running! Opening the existing game.\n'
                  'Keep the ORIGINAL server window open during the party.\n'
                  'You can close this extra window. Your saved teams and photos are unchanged.', flush=True)
            if not args.no_open:
                open_chrome()
            return 0
        print(f'Could not start the party app: {error}')
        if error.errno == errno.EADDRINUSE:
            print('Another app is using port 8765. Close that app’s server and launch again.\n'
                  'This launcher has not stopped it or changed your saved party data.')
        return 1
    print(f'Microscope Parlour Game: {URL}\nKeep this window open during the party. Press Control+C to stop.', flush=True)
    if not args.no_open:
        open_chrome()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nThe circus server is closed.')
    finally:
        server.server_close()
    return 0

if __name__ == '__main__':
    raise SystemExit(main())
