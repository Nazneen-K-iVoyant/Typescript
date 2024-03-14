"use strict";
/*Mixins are a design pattern that allows you to compose behavious from multiple source objects into a new object.
In Typescript this pattern can be achieved by combining multiple classes to form a new class.
Its a way of reusing multiple class functionalities to form a new unique class */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//Define a mixin class that implements the mixin behaviour
var PrintableMixin = /** @class */ (function () {
    function PrintableMixin() {
    }
    PrintableMixin.prototype.print = function () {
        console.log("Printing....");
    };
    return PrintableMixin;
}());
//Define a target class that will use the mixin
var Document = /** @class */ (function () {
    function Document(title) {
        this.title = title;
    }
    return Document;
}());
//Implement the printable behaviour on the target class
var PrintableDocument = /** @class */ (function (_super) {
    __extends(PrintableDocument, _super);
    function PrintableDocument(title) {
        return _super.call(this, title) || this;
    }
    //Implement the print method from the printable interface
    PrintableDocument.prototype.print = function () {
        console.log("Printing document ".concat(this.title));
    };
    return PrintableDocument;
}(Document));
var doc = new PrintableDocument("My Document");
doc.print();
