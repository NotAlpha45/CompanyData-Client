import { EnumPageView, EnumSubPageView } from "../enums/EnumPageView";
import { InterestNewsCarouselType } from "../types/ArchiveComponentTypes";
import { CustomFilterDataType } from "../types/CustomFilterTypes";
import { StorageLocalBase } from "./StorageBase";
class StorageBreifImpl extends StorageLocalBase {
  StorageNamespace = "regbreif";
  readonly TokenType = "Bearer";
  private readonly KeyToken: string = "token";
  private readonly KeyInterestedNews = "interestedbrief";
  private readonly MyBriefData = "mybrief";
  private readonly SubPageView = "subpageview";
  private readonly PageView = "pageview";

  get Token(): string | undefined {
    return this.getString(this.KeyToken);
  }

  get AuthHeaderValue(): string | undefined {
    const headerVal = this.getString(this.KeyToken);
    return headerVal ? this.TokenType + " " + headerVal : undefined;
  }

  Clear(): void {
    [this.KeyToken].forEach((key) => {
      this.delete(key);
    });
  }
  setInterestedBriefData(interestBrief: InterestNewsCarouselType[]) {
    this.setObject(this.KeyInterestedNews, interestBrief);
  }
  getInterestedBriefs(): InterestNewsCarouselType[] | undefined {
    return this.getObject(this.KeyInterestedNews);
  }

  setMyBriefData(myBriefData: CustomFilterDataType) {
    this.setObject(this.MyBriefData, myBriefData);
  }
  getMyBriefData(): CustomFilterDataType | undefined {
    return this.getObject(this.MyBriefData);
  }
  setSubPageView(subpage: EnumSubPageView) {
    this.setString(this.SubPageView, subpage);
  }

  setPageView(page: EnumPageView) {
    this.setString(this.PageView, page);
  }

  getSubPageView(): string | undefined {
    return this.getString(this.SubPageView);
  }

  getPageView(): string | undefined {
    return this.getString(this.PageView);
  }
}

export const StorageBreif = new StorageBreifImpl();
