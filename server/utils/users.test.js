const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [
      {id: '1', name: 'Mike', room: 'Node Course'},
      {id: '2', name: 'Dillon', room: 'React Course'},
      {id: '3', name: 'Ross', room: 'Node Course'}
    ];
  });

  it('should add new user', () => {
    let users = new Users();
    let user = {
      id: '123',
      name: 'Test user',
      room: 'The Office Fans'
    };
    let resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should find user', () => {
    let userId = '2';
    let user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    let userId = '99';
    let user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should remove a user', () => {
    let userId = '1';
    let user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should NOT remove a user', () => {
    let userId = '99';
    let user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should return names for Node Course', () => {
    let userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike','Ross']);
  });

  it('should return names for React Course', () => {
    let userList = users.getUserList('React Course');

    expect(userList).toEqual(['Dillon']);
  });
});
