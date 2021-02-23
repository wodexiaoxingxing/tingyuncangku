function triggerJsError() {
    const event = window.TINGYUN.createAutoEvent({
        key: 'name_error'
    });
    throw new Error('test-error');
    event.end();
}
// time,cb
function sendAjax() {
    // const event = window.TINGYUN.createAutoEvent({
    //     key: 'name2'
    // });
    const xhr = new XMLHttpRequest
    var time = new Date().getTime()
    xhr.open('get', `https://reportalpha1.tingyun.com/demo-server/test/custom-request?timeout=${time || 100}`);
    // xhr.open('get', `http://localhost:8089/shop/list?timeout=${time || 100}`);
    // xhr.open('get', `https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js?timeout=${time || 100}`);
    xhr.onload = function() {
            // cb && cb();
            // sleep(1000);
            console.log('原生js两个同级别ajax的get请求')
        }
        // xhr.send();
    xhr.send(JSON.stringify({
            delay: 2000
        }))
        // event.end();
        // event.fail();
    console.log('原生js两个同级别ajax的get请求')
}

function sendRequest() {
    const event = window.TINGYUN.createAutoEvent({
        key: '批量审批-自动123123123123123123123123123'
    });
    performance.mark('ty_fp');
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'http://192.168.5.114:8089/shop/list')
    xhr.setRequestHeader('Content-Type', 'application/json')
        // xhr.setRequestHeader('wjn_test','header_value11')
    xhr.onload = function() {
        sleep(1000);
    }
    xhr.send(JSON.stringify({
        delay: 2000
    }))
    event.end();
    // performance.mark('ty_le');
}

function sendList() {
    // const event = window.TINGYUN.createAutoEvent({
    //     key: '批量审批-手动123123123123123123123123123'
    // });
    const xhr = new XMLHttpRequest();
    //设置请求头


    xhr.open('POST', 'http://192.168.5.114:8089/shop/list?type=wjn_type1')
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.setRequestHeader('wjn_test', 'header_snow')
        //当前袁洁配置的不能生效，原因是该接口没有配置ceshi1的  -----没配服务端返回头导致的报错
        //xhr.setRequestHeader('ceshi1', 'ceshi1')
    xhr.onload = function() {
        // sleep(1000);
        console.log('原生js的ajax的post请求')
    }
    xhr.send(JSON.stringify({
            delay: 2000
        }))
        // event.fail();
    console.log('原生js的ajax的post请求')
}

function sendjQAjax(time) {
    $.ajax({
        method: 'GET',
        url: `https://reportalpha1.tingyun.com/demo-server/test/custom-request?timeout=${time || 100}`,
        success: function() {
            console.log(`request ${time} end`);
        }
    })
    console.log(`jq的ajax的get请求`)
        // $.get(`https://reportalpha1.tingyun.com/demo-server/test/custom-request?timeout=${time || 100}`, function() {
        //     console.log(`request ${time} end`);
        // })
}

function foo() { bar(); }

function yjget() {
    $.ajax({
        method: 'POST',
        url: `http://192.168.5.186:5000/index1`,
        // dataType: 'jsonp', // 请求方式为jsonp
        // crossDomain: true,
        success: function() {
            console.log('jq访问袁洁的get接口');
        }
    })
}