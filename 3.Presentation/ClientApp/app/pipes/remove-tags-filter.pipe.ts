import {PipeTransform,Pipe} from '@angular/core';

@Pipe({
    name:'removeTagsFilter'
})

export class RemoveTagsFilterPipe implements PipeTransform{
    transform(value: string): string{
        value = value.replace(/<h4>/g, '');
        value = value.replace(/<\/h4>/g, '');
        value = value.replace(/<p>/g, '');
        value = value.replace(/<\/p>/g, '');
        return value;
    }

}