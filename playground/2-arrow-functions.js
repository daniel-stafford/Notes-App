const event = {
	name: "Birthday Party",
	guestList: ["Bob", "John"],
	printGuestList() {
		this.guestList.forEach(guest => console.log(`${guest} is attending ${this.name}`));
	}
}

event.printGuestList()
