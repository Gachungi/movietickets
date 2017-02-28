describe('Ticket', function() {
    it("creates a moviegoer with the given specifications", function() {
        var testTicket = new Ticket("Meru", "4:00", 10);
        expect(testTicket.movieTitle).to.equal("Meru");
        expect(testTicket.movieTime).to.equal("4:00");
        expect(testTicket.userAge).to.equal(10);
    });

    it("calculates a movie price based on user selection", function() {
        var testTicket = new Ticket(2,3,4);
        expect(testTicket.ticketPrice()).to.equal(9);
    })
});
