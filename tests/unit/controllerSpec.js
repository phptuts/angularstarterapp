describe("Test Controllers ", function(){
   
   var $controller;
   var $rootScope;
   var configService;

   
   beforeEach(module('starterApp'));

   beforeEach(inject(function(_$controller_, _$rootScope_, _configService_){

        $controller = _$controller_;
        $rootScope  = _$rootScope_;
        configService = _configService_;
    
  }));
   
  describe("Title Controller", function()
  {
       var titleController;
       var $scope;
      
       beforeEach(inject(function()
       {           
           $scope = $rootScope.$new();
           titleController = $controller('TitleController', { $scope: $scope, configService: configService});
       }));
       
       it("should have a title variable on the scope", function(){
            expect($scope.title).toBeDefined();
       });
       
       it("should have a keyword variable on the scope", function(){
            expect($scope.keywords).toBeDefined();
       });
       
       it("should have a description variable on the scope", function(){
            expect($scope.description).toBeDefined();       
       });
       
       it("should change title scope variable when the configservice changes", function(){
       
           configService.setTitle("MOO");
           $scope.$digest();
           expect($scope.title).toBe("MOO");

       });
       
       it("should change description scope variable when the configservice changes", function(){
       
           configService.setDescription("This is a description");
           $scope.$digest();
           expect($scope.description).toBe("This is a description");

       });
       
       it("should change keywords scope variable when the configservice changes", function(){
       
           configService.setKeywords("blah,blah,blah");
           $scope.$digest();
           expect($scope.keywords).toBe("blah,blah,blah");

       });
       
  });
    
});
