import { memo } from "react";
import GenericTemplate from "../templates/GenericTemplate";
import MaterialTable from "material-table";

export const ProductPage = memo(() => {
  return (
    <GenericTemplate title={"検索結果"}>
      <MaterialTable
        columns={[
          { title: "生徒名", field: "studentName" },
          { title: "学年", field: "grade" },
        ]}
        data={[
          {
            studentName: "山田 まさき",
            grade: 3,
          },
          {
            studentName: "榎本 東悟",
            grade: 1,
          },
          {
            studentName: "五条 悟",
            grade: 2,
          },
        ]}
        options={{
          showTitle: false,
        }}
      />
    </GenericTemplate>
  );
});
