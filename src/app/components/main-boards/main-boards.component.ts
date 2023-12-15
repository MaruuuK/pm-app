import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IconDefinition, faXmark } from '@fortawesome/free-solid-svg-icons';
import { BoardsService } from 'src/app/services/boards.service';
import { Board } from 'src/app/models/board.model';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Subscription, take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'pm-main-boards',
  templateUrl: './main-boards.component.html',
  styleUrls: ['./main-boards.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainBoardsComponent implements OnInit, OnDestroy {
  public isLoading = false;
  public faXmark: IconDefinition = faXmark;

  public boards: Board[] = [];
  public formBoardData!: FormGroup;
  public error = '';

  private clickEventSubscriptionBoard!: Subscription;

  constructor(
    private boardsService: BoardsService,
    private router: Router,
    private authService: AuthService,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.getBoards();
  }

  private getBoards() {
    this.isLoading = true;
    this.boardsService.getBoards().subscribe((boards) => {
      this.boards = boards;
      this.isLoading = false;
    });
  }

  onDeleteBoard(e: Event, board: Board) {
    // this.confirmationService.showConfirmModal();
    // this.deletedBoard = board;
    // e.stopPropagation();
    // this.alertMessage = this.translateService.instant(
    //   'confirmAlert.deleteBoard',
    //   { boardTitle: board.title }
    // );
  }

  onDeleteEvent() {
    // this.confirmationService.hideConfirmModal();
    // this.isLoading = true;
    // this.boardsService.deleteBoard(this.deletedBoard).subscribe(() => {
    //   this.boards = this.boards.filter((board) => {
    //     return board._id !== this.deletedBoard._id;
    //   });
    //   this.isLoading = false;
    // });
  }

  OnNavigateToBoard(board: Board) {
    this.router.navigate(['/main/board', board.title], {
      queryParams: { id: board._id },
    });
  }

  ngOnDestroy(): void {
    // this.clickEventSubscriptionBoard.unsubscribe();
  }
}
