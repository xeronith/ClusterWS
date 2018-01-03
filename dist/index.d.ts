// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../uws
//   ../http
//   ../https

import * as WebSocket from 'uws';
import * as HTTP from 'http';
import * as HTTPS from 'https';

export default class ClusterWS {
    constructor(configurations: Configurations);
}

export class Broker {
    static Client(url: string, key: string, broadcaster: any, reconnected?: boolean): void;
    static Server(serverPort: number, key: string, scaleOptions?: ScaleOptions | false): void;
}

export class EventEmitter {
    on(event: string, listener: Listener): void;
    emit(event: string, ...args: any[]): void;
    onmany(event: string, listener: Listener): void;
    emitmany(event: string, ...args: any[]): void;
    removeListener(event: string, listener: Listener): any;
    removeEvent(event: string): void;
    removeEvents(): void;
}

export function encode(event: string, data: any, type: string): any;
export function decode(socket: Socket, message: any): any;

export class Socket {
    worker: Worker;
    channels: CustomObject;
    events: EventEmitter;
    constructor(worker: Worker, socket: WebSocket);
    on(event: string, listener: Listener): void;
    send(event: string, data: any, type?: string): void;
    disconnect(code?: number, reason?: string): void;
}

export class WSServer extends EventEmitter {
    middleware: CustomObject;
    publish(channel: string, data: any): void;
    setMiddleware(name: string, listener: Listener): void;
    broadcastMessage(x: string, message: any): void;
    setBroker(br: WebSocket): void;
}

export class Worker {
    options: Options;
    wss: WSServer;
    server: HTTP.Server | HTTPS.Server;
    constructor(options: Options, key: string);
}

export type Listener = (...args: any[]) => void;
export type WorkerFunction = () => void;
export interface CustomObject {
    [propName: string]: any;
}
export interface TlsOptions {
    ca?: string;
    pfx?: string;
    key?: string;
    cert?: string;
    passphrase?: string;
}
export interface ScaleOptions {
    port: number;
    url?: string;
    key?: string;
    master?: boolean;
}
export interface Configurations {
    worker: WorkerFunction;
    port?: number;
    workers?: number;
    useBinary?: boolean;
    brokerPort?: number;
    tlsOptions?: TlsOptions;
    scaleOptions?: ScaleOptions;
    pingInterval?: number;
    restartWorkerOnFail?: boolean;
}
export interface Options {
    worker: WorkerFunction;
    port: number;
    workers: number;
    useBinary: boolean;
    brokerPort: number;
    tlsOptions: TlsOptions | false;
    scaleOptions: ScaleOptions | false;
    pingInterval: number;
    restartWorkerOnFail: boolean;
}
export function logError<T>(data: T): any;
export function logReady<T>(data: T): any;
export function logWarning<T>(data: T): any;
export function randomString(length: number): string;

