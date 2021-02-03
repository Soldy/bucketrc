/*
 *  @Soldy\bucketrc\2021.02.02\GPL3
 */
'use strict';

const setupBase = (require('setuprc')).base;

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
        return add(val);
    }
    /*
     * @public
     * @return {any}
     *
    */
    this.last = function(){
        return last();
    }
    /*
     * @public
     * @return {any}
     *
    */
    this.random = function(){
        return random();
    }
    /*
     * @public
     * @return {any}
     *
    */
    this.first = function(){
        return first();

    }
    /*
     * @param {any}
     * @public
     * @return {boolean}
     *
    */
    this.remove = function(num){
        return removeFormBackBucket(num);
    }
    /*
     * @public
     * @return {array}
    */
    this.all = function(){
        return all();
    }
    /*
     * @private
     * @var {array}
    */
    let bucket = [];
    /*
     * @private
     * @var {array}
    */
    let backBucket = [];
    /*
     * @param {any}
     * @private
     * @return {boolean}
     */
    const add = function(val){
        backBucket.push(val);
        syncron();
        return true;
    }
    /*
     * @private
     * @return {void}
    */
    const syncron = function(){
        bucket = JSON.parse(
            JSON.stringify(
                backBucket
            )
        );
    }
    /*
     * @param {integer}
     * @private
     * @return {any}
     */
    const get = function(num){
        const out = bucket[num];
        removeFromBucket(num);
        return out;
    }
    /*
     * @private
     * @return {any}
     */
    const first = function(){
        return get (0);
    }
    /*
     * @private
     * @return {any}
     */
    const random = function(){
        return get(
            Math.round(
                Math.random()*(bucket.length)
            )
        );
    }
    /*
     * @private
     * @return {any}
     *
     */
    const last = function(){
        return get(bucket.length-1);
    }
    /*
     * @param {integer}
     * @private
     * @return {boolean}
     */
    const removeFormBucket = function(n){
        if(typeof bucket[n] === 'undefined')
            return false;
        bucket.splice(n, 1);
        return true;
    }
    /*
     * @param {integer}
     * @private
     * @return {boolean}
     */
    const removeFormBackBucket = function(n){
        if(typeof backBucket[n] === 'undefined')
            return false;
        backBcket.splice(n, 1);
        return true;
    }
    /*
     * @private
     * @return {array}
    */
    const all = function(){
        return JSON.parse(
            JSON.stringify(
                backBucket
            )
        );
    }
    /*
     * setup  helper
     * @private
     */
    const setup = new setupBase({
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
        setup.setup(settings);

}


exports.base = bucketBase;
