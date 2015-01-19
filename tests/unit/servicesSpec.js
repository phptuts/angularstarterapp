describe("Test Services ", function(){
   
   beforeEach(module('starterApp'));
   
   describe('Config Service', function(){
       
        var configService;
       
        beforeEach(inject(function(_configService_){
            configService = _configService_;
        }));
        
        it("it should have a title variable", function(){
           expect(configService.title).toBeDefined(); 
        });
        
        it("it should have a description variable", function(){
           expect(configService.description).toBeDefined(); 
        });
        
        it("it should have a keywords variable", function(){
           expect(configService.keywords).toBeDefined(); 
        });
       
        it("it should have a currentPage variable", function(){
           expect(configService.currentPage).toBeDefined(); 
        })
        
        it("it should be able to change the value of the title", function(){
           configService.setTitle("TITLE");
           expect(configService.title).toBe("TITLE"); 
        });
        
        it("it should be able to change the value of the currentPage", function(){
           configService.setCurrentPage("BLAH PAGE");
           expect(configService.currentPage).toBe("BLAH PAGE"); 
        });
        
        it("it should be able to change the value of the keywords", function(){
           configService.setKeywords("moo,blue,too");
           expect(configService.keywords).toBe("moo,blue,too"); 
        });
        
        it("it should be able to change the value of the description", function(){
           configService.setDescription("DESCIPTION");
           expect(configService.description).toBe("DESCIPTION");
        });
        
        
       
   });
   
});