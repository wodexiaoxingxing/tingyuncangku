//scope contexts api
//setcontext
//-------------------全局的scope------------------------------------------------------------------
// TINGYUN.addLifeCycleHook('init', function() {
//     console.log('Agent init.');
// });
//全局的  common: ---暂时不支持
//用法1 传入key和value。value必须为object
window.TINGYUN.setContext('fangfa1', { name: 'yuanjie1', version: 'v1.1.1' });
//用法2
window.TINGYUN.setContext({
    fangfa1: {
        name: 'yuanjie2',
        version: '10'
    },
    fangfa2: {
        name: 'yuanjie2',
        version: '10'
    }
});
// 调用此接口设置的数据，直接放在extra key 下  直接设置extra
// window.TINGYUN.setExtraContext({
//     app_version: 'v1.1.1',
//     package_name: 'duhfduhfdfhd.zip',
// })
// window.TINGYUN.setExtraContext({
//         app_version: 'v1.1.8888888',
//         package_name: 'duhfduhfdfhd888888.zip'
//     })
//-----------------局部scope error  js错误---------------------------------------------------------

//局部scope-js error hook
window.TINGYUN.addActionHook('error', function(param) {
    const { actionData, scope, target } = param;
    scope.setContext({
        log: {
            name: 'logger2'
        },
        app: {
            name: '位置'
        }
    });

    //actionData.c = 1000;
    console.log(param);
    // console.log(scope._contexts.log.name);
    console.log('局部scope-js error hook');

});
// TINGYUN.addActionHook('error', function(params) {
//     const { actionData } = params;
//     // 调⽤⾃定义api记录错误id
//     console.log(actionData.id);
//     console.log(params);
//     // reportErrorId(actionData.id);
// });


//局部scope-error 调接口
// function captureException() {
//     window.TINGYUN.captureException(new Error('captureException'), {
//         log: {
//             name: 1,
//             age: 100
//         },
//         yuanjie: {
//             yuanjie: "1234567890"
//         }
//     })
// }
//----------------局部scope ajax请求----------------------------------------------------------
//局部scope-ajax hook
window.TINGYUN.addActionHook('ajax', function(params) {
    const { actionData, scope, target } = params
    scope.setContext({
        send: {
            ok: 1
        }
    })
    console.log('局部scope-ajax hook------1');
    console.log(params)
});
// window.TINGYUN.addActionHook('ajax', function(params) {
//     const { actionData, scope, target } = params
//     scope.setContext({
//         send1: {
//             ok: 1,
//             ok1: 1
//         },
//         send2: {
//             ok: 2,
//             ok1: 2,
//             ww: 2
//         },
//         send3: {
//             ok: 2,
//             ok1: 2,
//             ww: 2
//         },
//         send4: {
//             ok: 2,
//             ok1: 2,
//             ww: 2
//         },
//         send5: {
//             ok: 2,
//             ok1: 2,
//             ww: 2
//         },
//         send6: {
//             ok: 2,
//             ok1: 2,
//             ww: 2
//         },
//         send7: {
//             ok: 2,
//             ok1: 2,
//             ww: 2
//         }
//     })
//     console.log('局部scope-ajax hook-----2');
// });
//--------------------------------------------------------------------------

//Local Scope 可以用于在具体action项中添加特定数据
//ajax hook
// window.TINGYUN.addHook('ajax', function(params) {
//     const {target, actionData, scope} = params;
//     scope.setExtraContext({
//         customRequestHeader: actionData.headerRecord['custom-request-header'],
//         customResponseHeader: target.getResponseHeader('custom-response-header')
//     });
// });
//错误类型action
//JS错误触发时调用api记录错误id
// TINGYUN.addHook('error', function(params) {
//     const {actionData} = params;
//
//     // 调用自定义api记录错误id
//     reportErrorId(actionData.id);
// });
//--------------------------------------------------------------------------