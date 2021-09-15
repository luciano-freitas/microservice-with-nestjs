export class TeamResponseDto {
  readonly initials: string;
  readonly name: string;
  readonly playersId?: string[];
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
