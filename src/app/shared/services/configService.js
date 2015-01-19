
app.service('configService', function(){
   var self = this;
   
   self.title = 'Home Page';
   self.description = '';
   self.keywords = '';
   self.currentPage = 'home';
   
   
   self.setTitle = function(title)
   {
      self.title = title;  
   };
   
   self.setDescription = function(description)
   {
       self.description = description;
   };
   
   self.setKeywords = function(keywords)
   {
      self.keywords = keywords;  
   };
   
   self.setCurrentPage = function(page)
   {
     self.currentPage = page;  
   };
   
   return self;
});
