package com.example.demo.entity;

import java.util.Date;

public class ProductId{

	private static final long serialVersionUID = -1306683749307624853L;
	private String uuid;
	private String productBody;
	private String productId;
	private String referenceId;
	private String customerCode;
	private String nickName;
	private String fsrNo;
	private String endCode;
	private String ceRegion;
	private String salesRegion;
	private String customerName;
	private String characterization;
	private String market;
	private String application;
	private String productSegment;
	private Integer dieSize;
	private Integer dieSizeWid;
	private String finalNtoSite;
	private String technologyId;
	private String fabName;
	private String lincense;
	private String processRequirement;
	private String cusDeviceId;
	private Integer chipSize;
	private Integer chipSizeWid;
	private String finaNtoFab;
	/**
	 * 对应eteam的feature size
	 */
	private String actualTech;
	/**
	 * 对应eteam的photo layers
	 */
	private Integer actualTechL;
	/**
	 * 对应eteam的poly layers
	 */
	private Integer actualTechP;
	/**
	 * 对应eteam的matal layers
	 */
	private Integer actualTechM;
	/**
	 * 对应eteam的cu matal layers
	 */
	private Integer actualTechC;
	private Double refTech;
	private String shipCode;
	private String optionalInfo;
	private String maskInfo;
	private String bgbmLand;
	/**
	 * EPI-->code+描述
	 */
	private String epi;
	/**
	 * EPI--> code
	 */
	private String epiCode;
	/**
	 * EPI-->描述
	 */
	private String epiDes;
	
	private Date createDate;
	private Integer delFlag;
	private String creater;
	private String cusProName;
	private String cusProVer;
	private String cusTechName;
	private String assVenName;
	private String assVenVer;
	private String remark;
	
	private String requestId;
	
	private String status;
	/**
	 * 创建人id
	 */
	private String createrId;
	
	private String idType;
	
	private Date effectiveDate;
	
	private Double grossDie;
	
	private String zProdCatog;
	private String zPlatForm;
	private String zSubPlatForm;

	private String applicant;

	private Integer prodOwnerId;
	/**
	 * 对应的old version的prod id的uuid
	 */
	private String motherProdIdUuid;
	private String bodyUuid;
	
	private String cpTestingType;
	
	public String getUuid() {
		return uuid;
	}
	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
	public String getProductBody() {
		return productBody;
	}
	public void setProductBody(String productBody) {
		this.productBody = productBody;
	}
	public String getProductId() {
		return productId;
	}
	public void setProductId(String productId) {
		this.productId = productId;
	}
	public String getReferenceId() {
		return referenceId;
	}
	public void setReferenceId(String referenceId) {
		this.referenceId = referenceId;
	}
	public String getCustomerCode() {
		return customerCode;
	}
	public void setCustomerCode(String customerCode) {
		this.customerCode = customerCode;
	}
	public String getNickName() {
		return nickName;
	}
	public void setNickName(String nickName) {
		this.nickName = nickName;
	}
	public String getFsrNo() {
		return fsrNo;
	}
	public void setFsrNo(String fsrNo) {
		this.fsrNo = fsrNo;
	}
	public String getEndCode() {
		return endCode;
	}
	public void setEndCode(String endCode) {
		this.endCode = endCode;
	}
	public String getCeRegion() {
		return ceRegion;
	}
	public void setCeRegion(String ceRegion) {
		this.ceRegion = ceRegion;
	}
	public String getSalesRegion() {
		return salesRegion;
	}
	public void setSalesRegion(String salesRegion) {
		this.salesRegion = salesRegion;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public String getCharacterization() {
		return characterization;
	}
	public void setCharacterization(String characterization) {
		this.characterization = characterization;
	}
	public String getMarket() {
		return market;
	}
	public void setMarket(String market) {
		this.market = market;
	}
	public String getApplication() {
		return application;
	}
	public void setApplication(String application) {
		this.application = application;
	}
	public String getProductSegment() {
		return productSegment;
	}
	public void setProductSegment(String productSegment) {
		this.productSegment = productSegment;
	}
	public Integer getDieSize() {
		return dieSize;
	}
	public void setDieSize(Integer dieSize) {
		this.dieSize = dieSize;
	}
	public String getFinalNtoSite() {
		return finalNtoSite;
	}
	public void setFinalNtoSite(String finalNtoSite) {
		this.finalNtoSite = finalNtoSite;
	}
	public String getTechnologyId() {
		return technologyId;
	}
	public void setTechnologyId(String technologyId) {
		this.technologyId = technologyId;
	}
	public String getFabName() {
		return fabName;
	}
	public void setFabName(String fabName) {
		this.fabName = fabName;
	}
	public String getLincense() {
		return lincense;
	}
	public void setLincense(String lincense) {
		this.lincense = lincense;
	}
	public String getProcessRequirement() {
		return processRequirement;
	}
	public void setProcessRequirement(String processRequirement) {
		this.processRequirement = processRequirement;
	}
	public String getCusDeviceId() {
		return cusDeviceId;
	}
	public void setCusDeviceId(String cusDeviceId) {
		this.cusDeviceId = cusDeviceId;
	}
	public Integer getChipSize() {
		return chipSize;
	}
	public void setChipSize(Integer chipSize) {
		this.chipSize = chipSize;
	}
	public String getFinaNtoFab() {
		return finaNtoFab;
	}
	public void setFinaNtoFab(String finaNtoFab) {
		this.finaNtoFab = finaNtoFab;
	}
	public String getActualTech() {
		return actualTech;
	}
	public void setActualTech(String actualTech) {
		this.actualTech = actualTech;
	}
	public Double getRefTech() {
		return refTech;
	}
	public void setRefTech(Double refTech) {
		this.refTech = refTech;
	}
	public String getShipCode() {
		return shipCode;
	}
	public void setShipCode(String shipCode) {
		this.shipCode = shipCode;
	}
	public String getOptionalInfo() {
		return optionalInfo;
	}
	public void setOptionalInfo(String optionalInfo) {
		this.optionalInfo = optionalInfo;
	}
	public String getMaskInfo() {
		return maskInfo;
	}
	public void setMaskInfo(String maskInfo) {
		this.maskInfo = maskInfo;
	}
	public String getBgbmLand() {
		return bgbmLand;
	}
	public void setBgbmLand(String bgbmLand) {
		this.bgbmLand = bgbmLand;
	}
	
	public String getEpi() {
		return epi;
	}
	public void setEpi(String epi) {
		this.epi = epi;
	}
	public String getEpiCode() {
		return epiCode;
	}
	public void setEpiCode(String epiCode) {
		this.epiCode = epiCode;
	}
	public String getEpiDes() {
		return epiDes;
	}
	public void setEpiDes(String epiDes) {
		this.epiDes = epiDes;
	}
	public Date getCreateDate() {
		return createDate;
	}
	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}
	public Integer getDelFlag() {
		return delFlag;
	}
	public void setDelFlag(Integer delFlag) {
		this.delFlag = delFlag;
	}
	public String getCreater() {
		return creater;
	}
	public void setCreater(String creater) {
		this.creater = creater;
	}
	
	public Integer getDieSizeWid() {
		return dieSizeWid;
	}
	public void setDieSizeWid(Integer dieSizeWid) {
		this.dieSizeWid = dieSizeWid;
	}
	public Integer getChipSizeWid() {
		return chipSizeWid;
	}
	public void setChipSizeWid(Integer chipSizeWid) {
		this.chipSizeWid = chipSizeWid;
	}
	public String getCusProName() {
		return cusProName;
	}
	public void setCusProName(String cusProName) {
		this.cusProName = cusProName;
	}
	public String getCusProVer() {
		return cusProVer;
	}
	public void setCusProVer(String cusProVer) {
		this.cusProVer = cusProVer;
	}
	public String getCusTechName() {
		return cusTechName;
	}
	public void setCusTechName(String cusTechName) {
		this.cusTechName = cusTechName;
	}
	public String getAssVenName() {
		return assVenName;
	}
	public void setAssVenName(String assVenName) {
		this.assVenName = assVenName;
	}
	public String getAssVenVer() {
		return assVenVer;
	}
	public void setAssVenVer(String assVenVer) {
		this.assVenVer = assVenVer;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getRequestId() {
		return requestId;
	}
	public void setRequestId(String requestId) {
		this.requestId = requestId;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getCreaterId() {
		return createrId;
	}
	public void setCreaterId(String createrId) {
		this.createrId = createrId;
	}
	public String getIdType() {
		return idType;
	}
	public void setIdType(String idType) {
		this.idType = idType;
	}
	public Date getEffectiveDate() {
		return effectiveDate;
	}
	public void setEffectiveDate(Date effectiveDate) {
		this.effectiveDate = effectiveDate;
	}
	public Double getGrossDie() {
		return grossDie;
	}
	public void setGrossDie(Double grossDie) {
		this.grossDie = grossDie;
	}
	public Integer getActualTechL() {
		return actualTechL;
	}
	public void setActualTechL(Integer actualTechL) {
		this.actualTechL = actualTechL;
	}
	public Integer getActualTechP() {
		return actualTechP;
	}
	public void setActualTechP(Integer actualTechP) {
		this.actualTechP = actualTechP;
	}
	public Integer getActualTechM() {
		return actualTechM;
	}
	public void setActualTechM(Integer actualTechM) {
		this.actualTechM = actualTechM;
	}
	public Integer getActualTechC() {
		return actualTechC;
	}
	public void setActualTechC(Integer actualTechC) {
		this.actualTechC = actualTechC;
	}
	public String getzProdCatog() {
		return zProdCatog;
	}
	public void setzProdCatog(String zProdCatog) {
		this.zProdCatog = zProdCatog;
	}
	public String getzPlatForm() {
		return zPlatForm;
	}
	public void setzPlatForm(String zPlatForm) {
		this.zPlatForm = zPlatForm;
	}
	public String getzSubPlatForm() {
		return zSubPlatForm;
	}
	public void setzSubPlatForm(String zSubPlatForm) {
		this.zSubPlatForm = zSubPlatForm;
	}

	public String getApplicant() {
		return applicant;
	}

	public void setApplicant(String applicant) {
		this.applicant = applicant;
	}

	public Integer getProdOwnerId() {
		return prodOwnerId;
	}

	public void setProdOwnerId(Integer prodOwnerId) {
		this.prodOwnerId = prodOwnerId;
	}
	public String getMotherProdIdUuid() {
		return motherProdIdUuid;
	}
	public void setMotherProdIdUuid(String motherProdIdUuid) {
		this.motherProdIdUuid = motherProdIdUuid;
	}
	public String getBodyUuid() {
		return bodyUuid;
	}
	public void setBodyUuid(String bodyUuid) {
		this.bodyUuid = bodyUuid;
	}
	public String getCpTestingType() {
		return cpTestingType;
	}
	public void setCpTestingType(String cpTestingType) {
		this.cpTestingType = cpTestingType;
	}
}
