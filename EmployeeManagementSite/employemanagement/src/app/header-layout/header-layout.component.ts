import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrl: './header-layout.component.css'
})
export class HeaderLayoutComponent implements OnInit {
  menuItems: any[] = [];
  public isMenuVisible = true;
  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      this.isMenuVisible = !(event.url.includes('login') || event.url.includes('signup'))
    });
    this.menuItems = [{
      label: 'Profile', icon: 'pi pi-fw pi-file',
      command: () =>
        this.onMenuItemClick("Profile")
    }];
      this.menuItems.push({
        label: 'EmployeeDirectory', icon: 'pi pi-fw pi-pencil',
        command: () =>
          this.onMenuItemClick("EmployeeDirectory")
      });
    this.menuItems.push(
    { label: 'Logout', icon: 'pi pi-fw pi-sign-out', command: () => this.logOut() }
    );

  }
  onMenuItemClick(menuName: string) {

    if (menuName == 'Profile') {
      this.router.navigate(['admin/dashboard'])
    } else if (menuName == 'EmployeeDirectory')
      this.router.navigate(['admin/employee'])

  }
  logOut() {

    sessionStorage.clear();
    this.router.navigate(['login'])

  }



}
