import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 4.5,
                releaseDate: 'November, 2nd, 2019'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '/assets/images/http.png',
                price: 45.99,
                code: 'LKL-1094',
                duration: 80,
                rating: 4,
                releaseDate: 'December, 4th, 2019'
            },
            {
                id: 3,
                name: 'Angular: Router',
                imageUrl: '/assets/images/router.png',
                price: 75.99,
                code: 'GTO-7412',
                duration: 120,
                rating: 5,
                releaseDate: 'October, 1st, 2019'
            },
            {
                id: 4,
                name: 'Angular: CLI',
                imageUrl: '/assets/images/cli.png',
                price: 90.99,
                code: 'CLI-1874',
                duration: 60,
                rating: 3,
                releaseDate: 'June, 15th, 2019'
            },
            {
                id: 5,
                name: 'Angular: Animations',
                imageUrl: '/assets/images/animations.png',
                price: 80.99,
                code: 'AMT-5214',
                duration: 240,
                rating: 5,
                releaseDate: 'January, 24th, 2020'
            }
        ]
    }

}