const SinglyList = require('./class SinglyList.js');

describe("Add 1 element to SLL", function() {
    it("Тест 1.1", function() {
        let list = new SinglyList();
        list.add(1);
        expect(list.head.data).toBe(1);
    });
});

describe("Add 5 element to SLL", function() {
    it("Тест 1.1", function() {
        let list = new SinglyList();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        expect(list._length).toBe(5);
    });
});

describe("Remove head from SLL", function() {
    it("Тест 2.1", function() {
        let list = new SinglyList();
        list.add("test1");
        list.add("test2");
        list.add("test3");
        list.add("test4");
        list.add("test5");
        list.remove(1);
        expect(list._length).toBe(4);
    });
});

describe("Remove head from SLL", function() {
    it("Тест 2.2", function() {
        let list = new SinglyList();
        list.add("test1");
        list.add("test2");
        list.add("test3");
        list.add("test4");
        list.add("test5");
        list.remove(1);
        expect(list.head.data).toBe("test2");
    });
});

describe("Remove element from SLL at index", function() {
    it("Тест 3.1", function() {
        let list = new SinglyList();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        list.remove(3);
        expect(list._length).toBe(4);
    });
});

describe("Remove element from SLL at index", function() {
    it("Тест 3.2", function() {
        let list = new SinglyList();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        list.remove(3);
        expect(list.searchNodeAt(3).data).toBe(4);
    });
});