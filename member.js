function skillmember(){
    return{
        restrict: 'E',
        templateUrl: 'app/components/skillmember/skillmember.html',
        controller: 'SkillMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}