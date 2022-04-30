class EmployeePayrollData {
    get name() {
        return this._name;
    }

    set name(name) {
        let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
        if (nameRegex.test(name))
            this._name = name;
        else throw "Name is incorrect";
    }

    get email() {
        return this.email;
    }

    set email(email) {
        let emailRegex = RegExp('^[A-Za-z0-9!#$%&*+\\\\=?`{|}~^-]+(?:\\.[A-Za-z!#$%&*+\\\\=?`{|}~^-]+)*@(?:([0-9-]{1}|[a-zA-Z]{3,5})\\.)+[a-zA-Z]{2,3}$');
        if (emailRegex.test(email))
            this.email = email;
        else throw "Email Id is incorrect";
    }

    get profilePic() {
        return this._profilePic;
    }

    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
        this._gender = gender;
    }

    get department() {
        return this._department;
    }

    set department(department) {
        this._department = department;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._salary = salary;
    }

    get note() {
        return this._note;
    }

    set note(note) {
        this._note = note;
    }

    get start_date() {
        return this._start_date;
    }

    set start_date(start_date) {
        var now = new Date();
        now = Date.parse(now);
        if (start_date > now) 
            throw 'Start Date is Future date!';
            const minDate = new Date(now.setDate(now.getDate()-30));
            now = new Date();
            if(start_date < minDate)
            throw 'Start Date is incorrect'
         else {
            this._start_date = start_date;
        }
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this._start_date == undefined ? "undefined" :
            this._start_date.toLocalDateString("en-US", options);
        return 'Name = ' + this.name + ", Email = " + this.email + ", ProfilePic = " + this.profilePic + ", Gender = " + this.gender +
            ", Department = " + this.department + ", Salary = " + this.salary +
            ", StartDate = " + empDate + ", Note = " + this.note;
    }
}