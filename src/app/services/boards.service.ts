import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, catchError, throwError } from 'rxjs';
import { Board } from 'src/app/models/board.model';
import { Users } from 'src/app/models/users.model';
import { ConfigService } from 'src/app/services/config.service';
import { Modal } from 'bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class BoardsService {
  private boardCreatedSubject = new Subject<void>();
  boardCreated$ = this.boardCreatedSubject.asObservable();

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    private translateService: TranslateService
  ) {}

  openModalCreateBoard() {
    const boardModal = document.getElementById('createBoard');
    if (boardModal) {
      const boardModalBS = new Modal(boardModal);
      boardModalBS.show();
    }
  }

  getBoards() {
    return this.http.get<Board[]>(this.configService.apiUrl + '/boards');
  }

  createBoard(title: string, owner: string | null, users: string[]) {
    return this.http
      .post<Board>(this.configService.apiUrl + '/boards', {
        title: title,
        owner: owner,
        users: users,
      })
      .pipe(catchError(this.handleError.bind(this)));
  }

  private handleError(errorRes: HttpErrorResponse) {
    const errorMessage = this.translateService.instant(
      'errorMessages.defaultError'
    );
    if (!errorRes.error?.error) {
      return throwError(() => errorMessage);
    }
    return throwError(() => errorMessage);
  }

  deleteBoard(board: Board) {
    return this.http.delete<Board>(
      this.configService.apiUrl + '/boards/' + board?._id
    );
  }

  getUsers() {
    return this.http.get<Users[]>(this.configService.apiUrl + '/users');
  }
}
