app.controller('TitleController', ['configService', '$scope', 
    function(configService, $scope)
    {
        $scope.title = configService.title;
        $scope.keywords = configService.keywords;
        $scope.description = configService.description;
        
        $scope.$watch(function(){
                    
            $scope.title = configService.title;
            $scope.keywords = configService.keywords;
            $scope.description = configService.description;

        });
      
      
    }]);


