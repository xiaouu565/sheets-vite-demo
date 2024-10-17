import "./style.css";

import { LocaleType, Univer, UniverInstanceType } from "@univerjs/core";
import { defaultTheme } from "@univerjs/design";
import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { UniverFormulaEnginePlugin } from "@univerjs/engine-formula";
import { UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverSheetsFormulaPlugin } from "@univerjs/sheets-formula";
import { UniverSheetsUIPlugin } from "@univerjs/sheets-ui";
import { UniverUIPlugin } from "@univerjs/ui";
import { UniverSheetsNumfmtPlugin } from "@univerjs/sheets-numfmt";
import { UniverSheetsFilterPlugin} from "@univerjs/sheets-filter";
import { UniverSheetsFilterUIPlugin} from "@univerjs/sheets-filter-ui";
import { UniverSheetsSortPlugin} from "@univerjs/sheets-sort";
import { UniverSheetsSortUIPlugin} from "@univerjs/sheets-sort-ui";
import { UniverSheetsPlugin, WorkbookEditablePermission, WorkbookManageCollaboratorPermission, WorkbookMoveSheetPermission, WorksheetCopyPermission, WorksheetDeleteColumnPermission, WorksheetDeleteRowPermission, WorksheetEditPermission, WorksheetFilterPermission, WorksheetInsertColumnPermission, WorksheetInsertHyperlinkPermission, WorksheetInsertRowPermission, WorksheetPivotTablePermission, WorksheetSetCellStylePermission, WorksheetSetCellValuePermission, WorksheetSetColumnStylePermission, WorksheetSetRowStylePermission, WorksheetSortPermission, WorksheetViewPermission } from '@univerjs/sheets';
import { FUniver } from '@univerjs/facade';
/**
 * The ability to import locales from virtual modules and automatically import styles is provided by Univer Plugins. For more details, please refer to: https://univer.ai/guides/sheet/advanced/univer-plugins.
 * If you encounter issues while using the plugin or have difficulty understanding how to use it, please disable Univer Plugins and manually import the language packs and styles.
 * 
 * 【从虚拟模块导入语言包】以及【自动导入样式】是由 Univer Plugins 提供的能力，详情参考：https://univer.ai/zh-CN/guides/sheet/advanced/univer-plugins
 * 如果您在使用该插件的时候出现了问题，或者无法理解如何使用，请禁用 Univer Plugins，并手动导入语言包和样式
 */
import { zhCN, enUS } from 'univer:locales'

const univer = new Univer({
  theme: defaultTheme,
  locale: LocaleType.EN_US,
  locales: {
    [LocaleType.ZH_CN]: zhCN,
    [LocaleType.EN_US]: enUS,
  },
});

univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);
univer.registerPlugin(UniverSheetsFilterPlugin);
univer.registerPlugin(UniverSheetsFilterUIPlugin);
univer.registerPlugin(UniverSheetsSortPlugin);
univer.registerPlugin(UniverSheetsSortUIPlugin);


univer.registerPlugin(UniverUIPlugin, {
  container: 'app',
});

univer.registerPlugin(UniverDocsPlugin, {
  hasScroll: false,
});
univer.registerPlugin(UniverDocsUIPlugin);

univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsUIPlugin);
univer.registerPlugin(UniverSheetsNumfmtPlugin);
univer.registerPlugin(UniverSheetsFormulaPlugin);

// create univer sheet instance
univer.createUnit(UniverInstanceType.UNIVER_SHEET, {
  "id": "gyI0JO",
  "sheetOrder": [
      "RSfWjJFv4opmE1JaiRj80"
  ],
  "name": "",
  "appVersion": "0.1.11",
  "locale": "zhCN",
  "styles": {},
  "sheets": {
      "RSfWjJFv4opmE1JaiRj80": {
          "id": "RSfWjJFv4opmE1JaiRj80",
          "name": "测试",
          "tabColor": "",
          "hidden": 0,
          "rowCount": 30,
          "columnCount": 10,
          "zoomRatio": 1,
          "freeze": {
              "startRow": -1,
              "startColumn": -1,
              "ySplit": 0,
              "xSplit": 0
          },
          "scrollTop": 0,
          "scrollLeft": 0,
          "defaultColumnWidth": 73,
          "defaultRowHeight": 23,
          "mergeData": [],
          "cellData": {},
          "rowData": {},
          "columnData": {
              "0": {
                  "w": 125,
                  "hd": 0
              },
              "1": {
                  "w": 125,
                  "hd": 0
              },
              "2": {
                  "w": 125,
                  "hd": 0
              },
              "3": {
                  "w": 125,
                  "hd": 0
              },
              "4": {
                  "w": 125,
                  "hd": 0
              },
              "5": {
                  "w": 125,
                  "hd": 0
              },
              "6": {
                  "w": 125,
                  "hd": 0
              },
              "7": {
                  "w": 125,
                  "hd": 0
              },
              "8": {
                  "w": 125,
                  "hd": 0
              },
              "9": {
                  "w": 125,
                  "hd": 0
              }
          },
          "showGridlines": 1,
          "rowHeader": {
              "width": 46,
              "hidden": 0
          },
          "columnHeader": {
              "height": 20,
              "hidden": 0
          },
          "selections": [
              "A1"
          ],
          "rightToLeft": 0
      }
  },
  "resources": [
      {
          "name": "SHEET_DEFINED_NAME_PLUGIN",
          "data": ""
      },
      {
        name: 'SHEET_RANGE_PROTECTION_PLUGIN',
        data: '{"RSfWjJFv4opmE1JaiRj80":[{"ranges":[{"startRow":1,"startColumn":2,"endRow":15,"endColumn":4,"rangeType":0,"unitId":"gyI0JO","sheetId":"RSfWjJFv4opmE1JaiRj80"}],"permissionId":"nLNP3ABg","id":"IYg5","name":"工作表1(G27:I31)","unitType":3,"unitId":"gyI0JO","subUnitId":"RSfWjJFv4opmE1JaiRj80"}]}',
    }
  ]
}
);
window.univer = univer;
window.univerAPI = FUniver.newAPI(univer);

//权限
const unitId = 'gyI0JO';
const sheetId = 'RSfWjJFv4opmE1JaiRj80';
const permission = window.univerAPI.getPermission();

//工作簿
//能否编辑协作者（保护行列用）
permission.setWorkbookPermissionPoint(unitId, WorkbookManageCollaboratorPermission, false);
//能否编辑工作簿
permission.setWorkbookPermissionPoint(unitId, WorkbookEditablePermission, true);

//控制可否移动工作表
permission.setWorkbookPermissionPoint(unitId, WorkbookMoveSheetPermission, false);

//能否复制
permission.setWorksheetPermissionPoint(unitId, sheetId, WorksheetCopyPermission, false);
//能否删除列
permission.setWorksheetPermissionPoint(unitId, sheetId, WorksheetDeleteColumnPermission, false);
//能否删除行
permission.setWorksheetPermissionPoint(unitId, sheetId, WorksheetDeleteRowPermission, false);
//能否过滤
permission.setWorksheetPermissionPoint(unitId, sheetId, WorksheetFilterPermission, false);
//能否插入列
permission.setWorksheetPermissionPoint(unitId, sheetId, WorksheetInsertColumnPermission, false);
//能否使用超链接
permission.setWorksheetPermissionPoint(unitId, sheetId, WorksheetInsertHyperlinkPermission, false);
//能否插入行
permission.setWorksheetPermissionPoint(unitId, sheetId, WorksheetInsertRowPermission, false);
//能否使用透视表
permission.setWorksheetPermissionPoint(unitId, sheetId, WorksheetPivotTablePermission, false);
//能否编辑单元格样式
permission.setWorksheetPermissionPoint(unitId, sheetId, WorksheetSetCellStylePermission, true);
//能否编辑单元格值
permission.setWorksheetPermissionPoint(unitId, sheetId, WorksheetSetCellValuePermission, false);
//能否设置列样式
permission.setWorksheetPermissionPoint(unitId, sheetId, WorksheetSetColumnStylePermission, false);
//能否使用行样式
permission.setWorksheetPermissionPoint(unitId, sheetId, WorksheetSetRowStylePermission, false);
//能否排序
permission.setWorksheetPermissionPoint(unitId, sheetId, WorksheetSortPermission, false);
//能否查看
permission.setWorksheetPermissionPoint(unitId, sheetId, WorksheetViewPermission, true);
//能否编辑
permission.setWorksheetPermissionPoint(unitId, sheetId, WorksheetEditPermission, false);
