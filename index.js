var dns = require('dns')

var suffix = '.asn.cymru.com';

var reverseIp = function(ip){
  var ipNibbles = ip.split('.');
  var reversed = '';
  for(var i = ipNibbles.length-1; i>=0; i--){
    reversed += ipNibbles[i] + '.';
  }
  return reversed;
}

var resolveResponse = function(response){
  return response[0][0].split(' | ')
}
module.exports = {
  resolve: function(ip, cb){
    dns.resolveTxt(reverseIp(ip)+'origin'+suffix, function(err, ret){
      if(err) return cb(err)
      if(!ret) return cb(null, null)
      var response = resolveResponse(ret)
      cb(null, {
        as: response[0],
        range: response[1],
        zone: response[2],
        agency: response[3].split(' ')[0]
      })
    })
  },
  describe: function(as, cb){
    as = as.toUpperCase()
    if(!as.startsWith('AS')){
      as = 'AS'+as
    }
    dns.resolveTxt(as+suffix, function(err, ret){
      if(err) return cb(err)
      if(!ret) return cb(null, null)
      var response = resolveResponse(ret)
      var nameSplit = response[4].split(' ')
      var name = '';
      for(var i = 2; i<nameSplit.length; i++){
        name += nameSplit[i]
        if(i != nameSplit.length - 1){
          name += ' '
        }
      }
      cb(null, {
        as: response[0],
        region: response[1],
        agency: response[2],
        label: nameSplit[0],
        name: name.split(',')[0]
      })
    })
  },
  peers: function(ip, cb){
    dns.resolveTxt(reverseIp(ip)+'peer'+suffix, function(err, ret){
      if(err) return cb(err)
      if(!ret) return cb(null, null)
      var response = resolveResponse(ret)
      cb(null, {
        as: response[0].split(' '),
        range: response[1],
        zone: response[2],
        agency: response[3].split(' ')[0]
      })
    })
  }
}
