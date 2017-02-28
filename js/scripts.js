function Ticket(movieTitle, movieType, movieTime, userAge) {
    this.movieTitle = movieTitle;
    this.movieType = movieType;
    this.movieTime = movieTime;
    this.userAge = userAge;
}

Ticket.prototype.ticketPrice = function () {
    return this.movieTitle + this.movieTime + this.movieType + this.userAge;
}

$(document).ready(function() {
    event.preventDefault();
    $("form#new-ticket").submit(function(event) {
        event.preventDefault();

        var inputTitle = parseInt($("select.new-movieTitle").val());
        var inputTime = parseInt($("select.new-movieTime").val());
        var inputAge = parseInt($("select.new-userAge").val());
        var inputType= parseInt($("select.new-movieType").val());

        var newTicket = new Ticket(inputTitle, inputTime, inputAge, inputType);

