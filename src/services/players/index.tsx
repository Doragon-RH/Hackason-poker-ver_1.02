import JsPlayer from "./demo-player-js"; // 変更禁止
import TsPlayer from "./demo-player-ts"; // 変更禁止
// ↓作成したプレイヤープログラムをimportしてください。
import Team7 from "./team7"; // sample
import Team8 from "./team8"; // sample
// ↑作成したプレイヤープログラムをimportしてください。

const Players: {
  [key: string]: any;
} = {
  DemoPlayer1: TsPlayer, // 変更禁止
  DemoPlayer2: TsPlayer, // 変更禁止
  DemoPlayer3: TsPlayer, // 変更禁止
  DemoPlayer4: JsPlayer, // 変更禁止
  team_7: Team7,
  team_8: Team8,
  // ↓作成したプレイヤープログラムを定義してください。
  // Team1, // sample
  // ↑作成したプレイヤープログラムを定義してください。
};

export default Players;
