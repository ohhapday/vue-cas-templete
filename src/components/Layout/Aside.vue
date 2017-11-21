<!-- /**
 * Created by WebStorm.
 * User: 서정석
 * Date: 2017/11/21
 * Time: 오전 11:15
 */ -->

<template>
  <aside class="main-sidebar">
    <section class="sidebar">
      <div class="user-panel">
        <div class="pull-left image">
          <img src="http://103.1.1.201/approval/user_draft_hr/hr_s/151036.jpg" class="img-rounded" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>과장 서정석</p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
      <!-- search form -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
            <button type="submit" name="search" id="search-btn" class="btn btn-flat">
              <i class="fa fa-search"></i></button>
          </span>
        </div>
      </form>
    </section>

    <ul class="sidebar-menu">
      <li class="header" style="border-bottom: #E3DFFB solid 1px;">MAIN NAVIGATION</li>
      <!-- todolist -->
      <li class="treeview active" style="border-bottom: #e3dffb solid 1px;">
        <a href="#">
          <i class="fa fa-edit"></i> <span>ToDo</span>
          <i class="fa fa-angle-left pull-right"></i>
          <small class="label pull-right bg-green" id="todo_total_cnt"></small>
        </a>
        <ul class="treeview-menu">
          <li class="active">
            <a href="/todo"><i class="fa fa-angle-right"></i>지시/보고
              <small class="badge pull-right bg-light-blue" style="font-size: 8px; font-weight: 100" id="todo_cnt">0
              </small>
            </a>
          </li>

          <li class="">
            <a href="/todo3"><i class="fa fa-angle-right"></i>업무협조
              <small class="badge pull-right bg-light-blue" style="font-size: 8px; font-weight: 100" id="todo3_cnt">0
              </small>
            </a>
          </li>
        </ul>
      </li>
      <!-- 사내거래 -->
      <li class="" style="border-bottom: #E3DFFB solid 1px;">
        <a href="#">
          <i class="fa fa-balance-scale"></i> <span>사내거래</span>
          <span class=" pull-right">
              <button type="button" class="fa fa-edit btn btn-primary btn-xs" id="btn_intertrade"
                      style="width: 30px;"></button>
              <small class="label bg-green" id="intertrade_cnt">1</small>
          </span>
        </a>
        <ul class="treeview-menu">
          <li class="">
            <a href="/in_trade2/"><i class="fa fa-angle-right"></i>결재할문서
              <small class="badge pull-right bg-light-blue" style="font-size: 8px; font-weight: 100"
                     id="intertrade_cnt_01">1
              </small>
            </a>
          </li>
          <li class="">
            <a href="/in_trade/"><i class="fa fa-angle-right"></i>작성중문서
              <small class="badge pull-right bg-gray" style="font-size: 8px; font-weight: 100" id="intertrade_cnt_02">
                0
              </small>
            </a>
          </li>
          <li class="">
            <a href="/in_trade3/"><i class="fa fa-angle-right"></i>진행문서
              <small class="badge pull-right bg-gray" style="font-size: 8px; font-weight: 100" id="intertrade_cnt_03">
                2
              </small>
            </a>
          </li>
          <li class="">
            <a href="/in_trade4/"><i class="fa fa-angle-right"></i>문서대장
              <small class="badge pull-right bg-gray" style="font-size: 8px; font-weight: 100" id="intertrade_cnt_04">
                1
              </small>
            </a>
          </li>
          <li class="">
            <a href="/in_trade5/"><i class="fa fa-angle-right"></i>수신문서
              <span class="badge pull-right bg-light-blue" style="font-size: 8px; font-weight: 100"
                    id="intertrade_cnt_05">0</span>
            </a>
          </li>
          <li class="">
            <a href="/in_trade6/aggregate"><i class="fa fa-angle-right"></i>부서별 집계
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
  export default {
    name: 'layoutAside',
  };
</script>

<style>
.wrapper {
  position: static;
}
</style>
