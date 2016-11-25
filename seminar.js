// typeof 연산자의 잘못된 사용
function BAD_TYPEOF_COMPARISON() {
    var pChangeMessageList = {};
    var param = typeof pChangeMessageList == "Array" ? pChangeMessageList.join('|') : pChangeMessageList;
    console.log(param);

    (function updateZkConfigs(configs) {
      var zks = this.getZkServerHosts();
      var portValue = configs['zoo.cfg'] && Em.get(configs['zoo.cfg'], 'clientPort');
      var zkPort = typeof portValue === 'udefined' ? '2181' : portValue;
      var zksWithPort = this.concatZkNames(zks, zkPort);
      this.setZKConfigs(configs, zksWithPort, zks);
    })({});
}

// 변수 선언 전 사용
function REFERENCE_BEFORE_DECL() {
    var rows = [];
    for (var i = 0; i < rows.length; i++) {
        var obj = {
            patternId: patternId,
            sortOrder: idx++
        };

        rowOrderArr.push(obj);
    }

    var patternId = $("#patternNameLabel").attr("patternId");
    $.post('/delete.do', { order: JSON.stringify(rowOrderArr) });
}
// 가령 rowOrderArr 객체로 서버에 AJAX 호출을 했을 때에야 알 수 있죠. (“클라이언트에서 patternId 값을 안 채워줘서 서버 에러가 나요!”)

// 변수 중복 선언
function DUPLICATE_VAR() {
    var idx = nextUrl.toUpperCase().indexOf('&PJTCODE=');
    if (idx > -1) {
        var pjtCode = nextUrl.substr(idx + 9, 15);
        if (idx > 9) {
            var pjtCode = 'BAD_CODE';
        }
        console.log(pjtCode); // 1)
    }
    console.log(pjtCode); // 2)
}

// 변수 재정의
function UNUSED_VAR_ASSIGN_1() {
    if ($.browser.msie == true) {
        var target = url + "userName" + userName; // 1)
        target = url.replace(/\.|\?|\&|\/|\=|\:|\-|\s/gi,""); // 2)
        return target;
    }
}

// 함수 중복 정의 - DUPLICATE_FUNC
function loadingClose(obj, finalize) { // 1)
}

function loadingClose(obj) { // 2)
}

// 객체 속성 중복 정의
function DUPLICATE_PROPERTY() {
    var obj = {
        page: $('#pageIndex').val(),
        rowNum: $('#pageSize').val(),
        sortname: '',
        sortorder: 'asc',
        rowNum: 15
    };
    console.log(obj);
}

function REDUNDANT_CONDITION(boardId) {
    // null/undefined에 의한 중복 조건
    if (boardId != null || boardId != "") {
         params += '&boardId=' + boardId;
    }

    // - Source: Apache Ambari 2.2.2 /app/utils/number_utils.js
    // 위 코드에서는 str==undefined가 항상 거짓이 되는데, 그 이유는 str이 undefined일 경우 선행 조건 str==null에 의해 체크되기 때문입니다. 선행 조건에서 undefined==null이 참인 이유는 == 연산자가 타입 체크 없이 비교를 하기 때문이구요. 따라서 str===null || str===undefined가 올바른 코드입니다. 헷갈리죠? :)
    (function validateInteger(str, min, max) {
        if (str==null || str==undefined || (str + "").trim().length < 1) {
          return Em.I18n.t('number.validate.empty');
        } else {
        }
    })(null);

    // 비교 연산자에 의한 중복 조건
    // – Source: Apache Ambari 2.2.2 /app/controllers/main/host.js
    var page = $(this).data('page');
    if (page <= 0 || page == "" || page === null || typeof page === "undefined") {
    }

    // 중첩 if에서의 중복 조건
    (function bulkOperationForHostComponentsDecommissionCallBack(operationData, data, turn_off) {
        if (turn_off) { // 1)
          console.log(1);
        } else {
            if (turn_off) { // 2)
              parameters['included_hosts'] = hostsWithComponentInProperState.join(',') // 3)
            }
            else {
              parameters['excluded_hosts'] = hostsWithComponentInProperState.join(',');
            }
        }
    })({}, {}, true);
}

// 동일 결과 조건
function CONSTANT_CONDITION(boardId) {
    // 미정의 변수 사용
    var closeSch;

    if (closeSch) { // 1)
        clearTimeout(closeSch);
    }
    closeSch = setTimeout(function() {
        console.log(1);
    });
    console.log(closeSch);

    // 값이 변하지 않는 변수 사용
    // – Source: Apache Ambari 2.2.2 /app/models/configs/objects/service_config_property.js
    (function validate() {
        var isError = false;
        var isWarn = false;

        if (!isWarn || isError) { // Errors get priority
          this.set('warnMessage', '');
          this.set('warn', false);
        } else {
          this.set('warn', true);
        }
    })();
}

// 도달 불가능한 코드
function UNREACHABLE_CODE() {
    try {
        //rows['startDate'] = rows['startDate'].toDate(datePattern);
    } catch (e) {
        console.log('rows["startDate"] is not date format');
    }

    (function withusSave(f) {
        var d = new Date();

        alert("죄송합니다. 시스템 점검중입니다.");
        return;

        if ( $.trim(busiName) == "" ) {
            console.log(1);
        }
    })();
}

// 조건문의 실행 코드 동일
function IDENTICAL_BRANCHES() {
    var setVal;

    if (device == 'mobile') {
        setVal = 4;
    } else {
        setVal = 4;
    }
    return setVal;
}

// null 체크 없이 사용되는 변수
function INSUFFICIENT_NULL_CHECK() {
    // – Source: Apache Ambari /app/controllers/installer.js
    (function checkRepoURL(wizardStep1Controller) {
        var selectedStack = this.get('content.stacks').findProperty('isSelected', true);
        selectedStack.set('reload', true); // 1)
        if (selectedStack && selectedStack.get('operatingSystems')) { // 2)
            console.log(2);
        }
    })();

    // – Source: Apache Ambari /app/mixins/common/serverValidator.js
    (function loadRecommendationsSuccess(data) {
        if (!data) {
          console.warn('error while loading default config values');
        }
        this._saveRecommendedValues(data); // 1)
        var configObject = data.resources[0].recommendations.blueprint.configurations; // 2)
        if (configObject) this.updateInitialValue(configObject);
        this.set("recommendationsConfigs", Em.get(data.resources[0] , "recommendations.blueprint.configurations"));
    })({});
}

// Switch 문에서의 break 미사용
function SWITCH_CASE_FALL_THROUGH() {
  (function loadAllPriorSteps() {
    var step = this.get('currentStep');
    switch (step) {
      case '7':
      case '6':
      case '5':
        this.loadServiceConfigProperties();
        this.getServiceConfigGroups();
      case '4':
      case '3':
        this.loadClients();
        this.loadServices();
        this.loadMasterComponentHosts();
        this.loadSlaveComponentHosts();
        this.load('hosts');
      case '2':
        this.loadServices();
      case '1':
        this.load('hosts');
        this.load('installOptions');
        this.load('cluster');
    }
  })();
}

// Return values
function showDefaultToolbar(msg) {
    msg = msg || i18n.noPreview;

    $('#preview-default-toolbar').fadeIn().find('.toolbar-message').text(msg);
}

msg = showDefaultToolbar('msg');

var retString = 'retString';
retString.concat(' , ' + 'renamed');
Notify.success(retString);

// Null pointer
function NULL_POINTER() {
    var match;
    if (false) {
        match = 1;
    } else {
        match = null;
    }
    return match.mark;
}

function SAME_OPERAND_VALUE(width) {
    var maxWidth = 100, xDiff;
    if (width > maxWidth) {
        maxWidth = width;
        xDiff = maxWidth - width;
    }
    return xDiff;
}
