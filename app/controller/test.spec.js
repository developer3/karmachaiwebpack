describe('a test', () => {
    it('is a test', () => {
        expect(2).to.equal(2);
    });

    it('a promise test', () => {
        return expect(Promise.resolve({ foo: "bar" })).to.eventually.have.property("foo");
    });
});
