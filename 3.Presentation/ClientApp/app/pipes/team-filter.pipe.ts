import {PipeTransform,Pipe} from '@angular/core';

import { ITeam} from '../models/team';
@Pipe({
    name:'teamsFilter'
})

export class TeamFilterPipe implements PipeTransform{
    transform(value: ITeam[], searchBy: string): ITeam[]{
        searchBy = searchBy ? searchBy.toLocaleLowerCase() : '';
        return searchBy ? value.filter((team: ITeam) =>
        team.name.toLocaleLowerCase().indexOf(searchBy)!== -1 || 
        team.league.toLocaleLowerCase().indexOf(searchBy)!== -1 || 
        team.country.toLocaleLowerCase().indexOf(searchBy)!== -1) : value;
    }

}