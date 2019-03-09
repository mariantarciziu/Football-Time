import {PipeTransform,Pipe} from '@angular/core';

import { IPlayer } from '../models/player';
@Pipe({
    name:'playersFilter'
})

export class PlayerFilterPipe implements PipeTransform{
    transform (value : IPlayer[],searchBy : string) : any{
        searchBy = searchBy ?  searchBy.toLocaleLowerCase() : '';
        return searchBy ? value.filter((player : IPlayer) =>
        player.name.toLocaleLowerCase().indexOf(searchBy)!== -1 || 
        player.league.toLocaleLowerCase().indexOf(searchBy)!== -1 || 
        player.currentTeam.toLocaleLowerCase().indexOf(searchBy)!== -1) : value;
    }

}