/*
 *  @Soldy\bucketrc\2021.02.02\GPL3
 */
'use strict';

const $setuprc = (require('setuprc')).base;

/*
 * pool bucket // I try to finish soon i can. Trash anyway
 * @param {integer} sizeIn
 * @prototype
 */

const bucketBase = function(settings){
    /*
     * @param {any}
     * @public
     * @return {boolean}
     *
    */
    this.add = function(val){
        return _add(val);
    }
    /*
     * @public
     * @return {any}
     *
    */
    this.last = function(){
        return _last();
    }
    /*
     * @public
     * @return {any}
     *
    */
    this.random = function(){
        return _random();
    }
    /*
     * @public
     * @return {any}
     *
    */
    this.first = function(){
        return _first();

    }
    /*
     * @param {any}
     * @public
     * @return {boolean}
     *
    */
    this.remove = function(num){
        return _removeFromBackBucket(num);
    }
    /*
     * @public
     * @return {array}
    */
    this.all = function(){
        return _all();
    }
    /*
     * @private
     * @var {array}
    */
    let _bucket = [];
    /*
     * @private
     * @var {array}
    */
    let _back_bucket = [];
    /*
     * @param {any}
     * @private
     * @return {boolean}
     */
    const _add = function(val){
        _back_bucket.push(val);
        _syncron();
        return true;
    }
    /*
     * @private
     * @return {void}
    */
    const _syncron = function(){
        _bucket = JSON.parse(
            JSON.stringify(
                _back_bucket
            )
        );
    }
    /*
     * @param {integer}
     * @private
     * @return {any}
     */
    const _get = function(num){
        const out = _bucket[num];
        _removeFromBucket(num);
        return out;
    }
    /*
     * @private
     * @return {any}
     */
    const _first = function(){
        return _get (0);
    }
    /*
     * @private
     * @return {any}
     */
    const _random = function(){
        return get(
            Math.round(
                Math.random()*(_bucket.length)
            )
        );
    }
    /*
     * @private
     * @return {any}
     *
     */
    const _last = function(){
        return _get(_bucket.length-1);
    }
    /*
     * @param {integer}
     * @private
     * @return {boolean}
     */
    const _removeFromBucket = function(n){
        if(typeof _bucket[n] === 'undefined')
            return false;
        _bucket.splice(n, 1);
        return true;
    }
    /*
     * @param {integer}
     * @private
     * @return {boolean}
     */
    const _removeFromBackBucket = function(n){
        if(typeof _back_bucket[n] === 'undefined')
            return false;
        _back_bucket.splice(n, 1);
        return true;
    }
    /*
     * @private
     * @return {array}
    */
    const _all = function(){
        return JSON.parse(
            JSON.stringify(
                _back_bucket
            )
        );
    }
    /*
     * setup  helper
     * @private
     */
    const _setup = new $setuprc({
        'size':{
           'minimum':{
               'type'    : 'int',
               'default' : 0
           },
           'maximum':{
               'type'    : 'int',
               'default' : 0
           }
        }
    });
    // constructor
    if(typeof settings !== 'undefined')
        _setup.setup(settings);

}


exports.base = bucketBase;
