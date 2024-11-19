import PropTypes from "prop-types";
import styles from "./Body.module.css";

const Body = ({ className = "" }) => {
  return (
    <section className={[styles.body, className].join(" ")}>
      <div className={styles.dashboardContentParent}>
        <div className={styles.dashboardContent}>
          <div className={styles.totalEmployees}>
            <div className={styles.totalEmployeesChild} />
            <div className={styles.metricContainers}>
              <div className={styles.metricHeaders}>
                <div className={styles.totalEmployeesWrapper}>
                  <div className={styles.resignedEmployees}>
                    Total Employees
                  </div>
                </div>
                <div className={styles.metricIcons}>
                  <div className={styles.metricValues}>856</div>
                </div>
                <a className={styles.employee}>Employee</a>
              </div>
            </div>
            <div className={styles.metricTrends}>
              <div className={styles.trendIcons}>
                <img
                  className={styles.bxtrendingUpIcon}
                  loading="lazy"
                  alt=""
                  src="/bxtrendingup.svg"
                />
              </div>
              <div className={styles.trendValues}>10.0%</div>
            </div>
          </div>
          <div className={styles.jobView}>
            <div className={styles.totalEmployeesChild} />
            <div className={styles.metricContainers}>
              <div className={styles.metricHeaders}>
                <div className={styles.jobViewWrapper}>
                  <a className={styles.jobView1}>Job View</a>
                </div>
                <div className={styles.metricIcons}>
                  <div className={styles.metricValues}>3,342</div>
                </div>
                <a className={styles.viewers}>Viewers</a>
              </div>
            </div>
            <div className={styles.metricTrends}>
              <div className={styles.trendIcons}>
                <img
                  className={styles.bxtrendingUpIcon}
                  alt=""
                  src="/bxtrendingup.svg"
                />
              </div>
              <div className={styles.trendValues}>22.0%</div>
            </div>
          </div>
          <div className={styles.jobApplied}>
            <div className={styles.totalEmployeesChild} />
            <div className={styles.metricContainers}>
              <div className={styles.metricHeaders}>
                <div className={styles.totalEmployeesWrapper}>
                  <a className={styles.jobView1}>Job Applied</a>
                </div>
                <div className={styles.metricIcons}>
                  <div className={styles.metricValues}>77</div>
                </div>
                <a className={styles.viewers}>Applicants</a>
              </div>
            </div>
            <div className={styles.metricTrends}>
              <div className={styles.trendIcons}>
                <img
                  className={styles.bxtrendingUpIcon}
                  alt=""
                  src="/bxtrendingup-2.svg"
                />
              </div>
              <div className={styles.trendValues}>12.0%</div>
            </div>
          </div>
          <div className={styles.resign}>
            <div className={styles.resignChild} />
            <div className={styles.resignInner}>
              <div className={styles.frameParent1}>
                <div className={styles.totalEmployeesWrapper}>
                  <div className={styles.resignedEmployees}>
                    Resigned Employees
                  </div>
                </div>
                <div className={styles.metricIcons}>
                  <div className={styles.metricValues}>17</div>
                </div>
                <div className={styles.employee1}>Employee</div>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.trendIcons}>
                <img
                  className={styles.bxtrendingUpIcon}
                  alt=""
                  src="/bxtrendingup-3.svg"
                />
              </div>
              <div className={styles.trendValues}>7.0%</div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.statisticsHeader}>
            <div className={styles.metricContainers}>
              <div className={styles.jobStatistics}>Job Statistics</div>
            </div>
            <div className={styles.monthlyStatistics}>
              <div className={styles.jobApplications}>
                <div className={styles.jobCounts}>
                  <input className={styles.countBars} type="checkbox" />
                  <div className={styles.jobView2}>Job View</div>
                </div>
              </div>
              <div className={styles.jobApplications}>
                <div className={styles.jobCounts}>
                  <input className={styles.countBars} type="checkbox" />
                  <div className={styles.jobApplied2}>Job Applied</div>
                </div>
              </div>
              <div className={styles.currentMonth}>
                <div className={styles.thisMonth}>This Month</div>
                <img
                  className={styles.akarIconschevronDown}
                  alt=""
                  src="/akariconschevrondown.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.chartContainerParent}>
            <div className={styles.chartContainer}>
              <div className={styles.chartPlaceholder}>
                <div className={styles.chartData}>100</div>
                <div className={styles.chartData1}>80</div>
                <div className={styles.chartData1}>60</div>
                <div className={styles.department}>40</div>
                <div className={styles.department}>20</div>
              </div>
              <div className={styles.xAxis}>
                <div className={styles.xAxisLabels}>
                  <div className={styles.xAxisLabelsChild} />
                  <div className={styles.monthValues}>
                    <div className={styles.monthValuesChild} />
                    <div className={styles.monthMarkers} />
                  </div>
                  <div className={styles.monthValues1}>
                    <div className={styles.monthValuesChild} />
                    <div className={styles.monthValuesInner} />
                  </div>
                  <div className={styles.yAxis}>
                    <div className={styles.monthValuesChild} />
                    <div className={styles.yAxisItem} />
                  </div>
                  <div className={styles.monthValues2}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.monthValuesChild1} />
                  </div>
                  <div className={styles.yAxisEnd}>
                    <div className={styles.yAxisEndChild} />
                    <div className={styles.yAxisMaximum} />
                  </div>
                  <div className={styles.monthValues3}>
                    <div className={styles.monthValuesChild} />
                    <div className={styles.monthValuesChild3} />
                  </div>
                  <div className={styles.monthValues4}>
                    <div className={styles.monthValuesChild} />
                    <div className={styles.monthValuesChild5} />
                  </div>
                  <div className={styles.lineParent}>
                    <div className={styles.frameItem} />
                    <div className={styles.frameInner} />
                    <div className={styles.lineDiv} />
                    <div className={styles.frameChild1} />
                    <div className={styles.chartValues}>
                      <div className={styles.chartValuesChild} />
                      <div className={styles.valueContainer}>
                        <div className={styles.valuePoint}>
                          <div className={styles.valueLabel}>
                            <div className={styles.value}>77</div>
                          </div>
                          <div className={styles.valueMarker}>
                            <img
                              className={styles.valueMarkerChild}
                              loading="lazy"
                              alt=""
                              src="/rectangle-310.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.chartEnd} />
                    </div>
                  </div>
                  <div className={styles.monthValues5}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.monthValuesChild7} />
                  </div>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.frameChild2} />
                    <div className={styles.chartMinimum} />
                  </div>
                  <div className={styles.monthValues6}>
                    <div className={styles.monthValuesChild} />
                    <div className={styles.monthValuesChild9} />
                  </div>
                  <div className={styles.monthValues7}>
                    <div className={styles.monthValuesChild} />
                    <div className={styles.monthValuesChild11} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.employeeChart}>
              <div className={styles.monthLabels}>
                <div className={styles.months}>
                  <div className={styles.jan}>Jan</div>
                </div>
                <div className={styles.months1}>
                  <div className={styles.jan}>Feb</div>
                </div>
                <div className={styles.months1}>
                  <div className={styles.mar}>Mar</div>
                </div>
                <div className={styles.months3}>
                  <div className={styles.apr}>Apr</div>
                </div>
                <div className={styles.months4}>
                  <div className={styles.may}>May</div>
                </div>
                <div className={styles.months5}>
                  <div className={styles.jan}>Jun</div>
                </div>
                <div className={styles.jul}>Jul</div>
                <div className={styles.aug}>Aug</div>
                <div className={styles.months1}>
                  <div className={styles.mar}>Sep</div>
                </div>
                <div className={styles.months1}>
                  <div className={styles.apr}>Oct</div>
                </div>
                <div className={styles.months3}>
                  <div className={styles.mar}>Nov</div>
                </div>
                <div className={styles.dec}>Dec</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.employeeTable}>
          <div className={styles.employeeStatus}>
            <div className={styles.employeeStatusChild} />
            <div className={styles.tableFilters}>
              <div className={styles.searchContainerWrapper}>
                <div className={styles.searchContainer}>
                  <div className={styles.employeeStatus1}>Employee Status</div>
                  <div className={styles.employeeName}>Employee Name</div>
                </div>
              </div>
              <div className={styles.filterLabels}>
                <div className={styles.department}>Department</div>
              </div>
              <div className={styles.filterLabels1}>
                <div className={styles.department}>Age</div>
              </div>
              <div className={styles.filterActions}>
                <button className={styles.filterOptions}>
                  <div className={styles.filterDropdown}>
                    <div className={styles.filterShort}>{`Filter & Short`}</div>
                  </div>
                  <img
                    className={styles.iconParksettingConfig}
                    alt=""
                    src="/iconparksettingconfig.svg"
                  />
                </button>
                <div className={styles.filterActionsInner}>
                  <div className={styles.disiplineParent}>
                    <div className={styles.disipline}>Disipline</div>
                    <div className={styles.status}>Status</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.separator} />
            <div className={styles.employeeListContainer}>
              <div className={styles.employeeListWrapper}>
                <div className={styles.employeeListHeader}>
                  <div className={styles.frameParent3}>
                    <img
                      className={styles.groupIcon}
                      loading="lazy"
                      alt=""
                      src="/group-239@2x.png"
                    />
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group-239-1@2x.png"
                    />
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group-239-2@2x.png"
                    />
                  </div>
                  <div className={styles.employeeNameWrapper}>
                    <div className={styles.departmentPlaceholderItemParent}>
                      <div className={styles.justinLipshutz}>
                        Justin Lipshutz
                      </div>
                      <div className={styles.marcusCulhane}>Marcus Culhane</div>
                      <div className={styles.leoStanton}>Leo Stanton</div>
                    </div>
                  </div>
                </div>
                <div className={styles.employeeDepartmentContainer}>
                  <div className={styles.employeeDepartmentWrapper}>
                    <div className={styles.employeeDepartmentFrame}>
                      <div className={styles.employeeDepartment}>
                        <div className={styles.marketing}>Marketing</div>
                        <div className={styles.finance}>Finance</div>
                        <div className={styles.rd}>{`R&D`}</div>
                      </div>
                    </div>
                    <div className={styles.employeeDepartmentWrapperInner}>
                      <div className={styles.employeeDepartment}>
                        <div className={styles.marketing}>22</div>
                        <div className={styles.div7}>24</div>
                        <div className={styles.div7}>28</div>
                      </div>
                    </div>
                    <div className={styles.departmentPlaceholder}>
                      <div className={styles.departmentPlaceholderItemParent}>
                        <div className={styles.totalEmployeesWrapper}>
                          <div className={styles.placeholder}>
                            <span>+</span>
                            <span className={styles.span}>100%</span>
                          </div>
                        </div>
                        <div className={styles.departmentSeparator}>
                          <span>+</span>
                          <span className={styles.span}>95%</span>
                        </div>
                        <div className={styles.departmentPlaceholderItem1}>
                          <div className={styles.departmentSeparator}>
                            <span>+</span>
                            <span className={styles.span}>89%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.employmentTypeParent}>
                      <div className={styles.employmentType}>
                        <div className={styles.permanent}>Permanent</div>
                      </div>
                      <div className={styles.employmentType1}>
                        <div className={styles.permanent}>Contract</div>
                      </div>
                      <div className={styles.employmentType}>
                        <div className={styles.permanent}>Permanent</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.employeeComposition}>
            <div className={styles.employeeCompositionChild} />
            <div className={styles.compositionContainer}>
              <div className={styles.employeeStatus1}>Employee Composition</div>
              <div className={styles.compositionChart}>
                <div className={styles.compositionChartContainer}>
                  <div className={styles.compositionChartWrapper}>
                    <div className={styles.frameParent4}>
                      <img
                        className={styles.frameChild5}
                        alt=""
                        src="/group-258.svg"
                      />
                      <div className={styles.femaleIconContainer}>
                        <img
                          className={styles.faSolidfemaleIcon}
                          loading="lazy"
                          alt=""
                          src="/fasolidfemale.svg"
                        />
                        <div className={styles.femalePercentage}>
                          <div className={styles.femaleValue}>35%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.faSolidmaleParent}>
                    <img
                      className={styles.faSolidmaleIcon}
                      loading="lazy"
                      alt=""
                      src="/fasolidmale.svg"
                    />
                    <div className={styles.maleValue}>65%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.totalEmployeesContainer}>
              <div className={styles.department}>856 employee total</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Body.propTypes = {
  className: PropTypes.string,
};

export default Body;
