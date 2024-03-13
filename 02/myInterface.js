/*Uses the keyword interface */
var naz = { dbId: 22, email: "h@h.com", userId: 23, startTrail: function () {
        return "Start";
    } };
naz.email = "naz@gmail.com";
console.log(naz);
// naz.dbId=123 ---> Throws error
