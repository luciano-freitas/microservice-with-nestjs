export class CreateTeamBodyDto {
  readonly initials: string;
  readonly name: string;
  readonly playersId?: string[];
}
