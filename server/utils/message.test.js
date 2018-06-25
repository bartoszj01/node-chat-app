var expect = require('expect');
var {generateMessage} = require('./message');



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