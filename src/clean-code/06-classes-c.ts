(() => {
  // Aplicando el principio de responsabilidad unica
  // Priorizar la conposicion frente a la herencia

  type Gender = 'M' | 'F';

  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    birthdate: Date;
    gender: Gender;
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
  }

  class User {
    public lastAccess: Date;
    email: string;
    role: string;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Settings {
    workingDirectory: string;
    lastOpenFolder: string;
    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
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

  class UserSettings {
    person: Person;
    settings: Settings;
    user: User;
    constructor({
      email,
      name,
      birthdate,
      role,
      gender,
      workingDirectory,
      lastOpenFolder,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthdate });
      this.settings = new Settings({ workingDirectory, lastOpenFolder });
      this.user = new User({ email, role });
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
