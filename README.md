# iptoas
Node.js module to resolve ASN information from an IP

Documentation for resolving this information found here: http://www.team-cymru.org/IP-ASN-mapping.html#dns

## Examples

```
var iptoas = require('iptoas')

iptoas.resolve('8.8.8.8', function(err, cb){...})
/*
{ as: '15169', range: '8.8.8.0/24', zone: 'US', agency: 'arin' }
*/

iptoas.describe('AS15169', function(err, cb){...})
/*
{ as: '15169',
  region: 'US',
  agency: 'arin',
  label: 'GOOGLE',
  name: 'Google Inc.' }
*/
iptoas.peers('8.8.8.8', function(err, cb){...})
/*
{ as: [ '174', '209', '1103', '1239', '2381', '3257', '6453' ],
  range: '8.8.8.0/24',
  zone: 'US',
  agency: 'arin' }
*/
```

If a record is not found, err will be null, however cb will also be null.

## Contribution

Feel free to submit a pull request! Or fork and do your own thing, that's cool too.

## License

The MIT License (MIT)

Copyright (c) 2015 Joe Hirschfeld

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
