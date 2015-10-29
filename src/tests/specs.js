describe('ControllerOne', function(){
  it("should be true", function(){
    expect(true).toBe(true);
  });
});
xdescribe('ControllerTwo', function(){

});
describe('UserFact', function(){
  var userFact, users;
  beforeEach(module('serviceapp'));
  beforeEach(function(){

    module(function($provide){
      $provide.value('Users', [
        {name: "one"}, {name: "two"}
      ]);
    });

    inject(function($injector){
      userFact = $injector.get('UserFact');
      users = $injector.get('Users');
    });
  });

  describe('remove', function(){
    it("should remove one item from users", function(){
      var startingLen = users.length;
      userFact.remove(0);
      expect(users.length).toBe(startingLen - 1);
    });
  });
});

describe('UserSvc', function(){
  var userSvc, users;
  beforeEach(module('serviceapp'));
  beforeEach(function(){

    module(function($provide){
      $provide.value('Users', [
        {name: "one"}, {name: "two"}
      ]);
    });

    inject(function($injector){
      userSvc = $injector.get('UserSvc');
      users = $injector.get('Users');
    });
  });

  describe('remove', function(){
    it("should remove one item from users", function(){
      var startingLen = users.length;
      userSvc.remove(0);
      expect(users.length).toBe(startingLen - 1);
    });
  });
});

xdescribe('UsersHttp', function(){

  describe('getUsers', function(){
    it("should return some users", function(){

    });
  });
});
