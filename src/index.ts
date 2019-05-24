import {App} from '../src/ui/app';
import '../style/layout.less';
import '../style/chat_header.less';
import '../style/members.less';
import '../style/notify_pop.less';
import '../style/login.less';
import '../style/chat_area.less';

const element = document.getElementById('chat_container');

App.init(element as HTMLElement);