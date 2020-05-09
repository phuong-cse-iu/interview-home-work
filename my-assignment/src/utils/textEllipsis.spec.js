import textEllipsis from './textEllipsis';

describe('Test textEllipsis func', () => {
    it('when text length is less than 100 then text is not truncated', () => {
        const testString = 'this is test string';

        expect(textEllipsis(testString)).toEqual(testString);
    });

    it('when text length is greater than 100 then text is truncated', () => {
        const testString = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic";
        const expected = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ...";
        expect(textEllipsis(testString)).toEqual(expected);
    });
});