"""Check lesson Python syntax and generated geometry descriptions, without OpenSCAD."""
from html.parser import HTMLParser
from pathlib import Path
import tempfile
import os

class CodeParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.python = False
        self.code = False
        self.blocks = []
    def handle_starttag(self, tag, attrs):
        if tag == 'pre':
            self.python = dict(attrs).get('data-lang') == 'Python'
        if tag == 'code' and self.python:
            self.code = True
            self.blocks.append('')
    def handle_endtag(self, tag):
        if tag == 'code': self.code = False
        if tag == 'pre': self.python = False
    def handle_data(self, data):
        if self.code: self.blocks[-1] += data

root = Path(__file__).resolve().parents[1]
parser = CodeParser()
parser.feed((root / 'index.html').read_text(encoding='utf-8'))
for i, code in enumerate(parser.blocks):
    # The intentionally incomplete loop is an exercise, not an executable solution.
    if '# TODO : calculer' in code:
        continue
    compile(code, f'lesson-{i}', 'exec')
source = (root / 'tests/artifacts/hanoi.py').read_text(encoding='utf-8')
original = Path.cwd()
try:
    for count in (5, 8):
        with tempfile.TemporaryDirectory() as folder:
            os.chdir(folder)
            exec(compile(source.replace('nb_disques = 5', f'nb_disques = {count}'), 'hanoi.py', 'exec'), {})
            assert len(list(Path('.').glob('disque_*.scad'))) == count
            model = Path('hanoi.scad').read_text(encoding='utf-8')
            assert model.count('difference()') == count
            assert f'd={30 + (count - 1) * 8},' in model
            os.chdir(original)
finally:
    os.chdir(original)
print('PASS: executable lesson snippets compile; 5 and 8 disks generated with expected diameters.')
