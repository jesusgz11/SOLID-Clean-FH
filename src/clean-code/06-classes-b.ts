(() => {
  // No aplicando el principio de responsabilidad unica

  type Gender = 'M' | 'F';

  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    birthdate: Date;
    gender: string;
    name: string;
    constructor({ name, gender, birthdate }: PersonProps) {
      this.birthdate = birthdate;
      this.gender = gender;
      this.name = name;
    }
  }

  interface UserProps {
    email: string;
    role: string;
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  class User extends Person {
    public lastAccess: Date;
    email: string;
    role: string;

    constructor({ email, role, gender, birthdate, name }: UserProps) {
      super({ name, gender, birthdate });
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class UserSettings extends User {
    workingDirectory: string;
    lastOpenFolder: string;
    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthdate,
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthdate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: '/usr/home',
    lastOpenFolder: '/home',
    email: 'jesusguzman.0311@gmail.com',
    role: 'Admin',
    name: 'Jesus',
    gender: 'M',
    birthdate: new Date('1995-02-03'),
  });

  console.log({ userSettings });
})();
