test("Knowing main JEST directives", () => {
    let number = null;
    expect(number).toBeNull();
    number = 10;
    expect(number).not.toBeNull();
    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
});

test("Should I work with objects", () => {
    const obj = { "name": "Felipe", "email": "felipe@email.com" };
    expect(obj).toHaveProperty("name");
    expect(obj).toHaveProperty("name", "Felipe");
    expect(obj.name).toBe("Felipe");

    const obj2 = { "name": "Felipe", "email": "felipe@email.com" };
    expect(obj2).toEqual(obj);
    expect(obj2).toStrictEqual(obj);
});