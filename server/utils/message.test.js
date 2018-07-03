var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');



describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var mtext = 'hello, new message';
        var from = 'ba030118';
        var message = generateMessage(from, mtext);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from: from,
            text: mtext
        });
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Bartosz';
        var latitude = 1;
        var longitude = 1;

        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.url).toEqual('https://www.google.com/maps?q=1,1');
    });
}); 