import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import style from './Style.module.scss'

const AgreeMent = () => {
  return (
    <View className={style.box}>
      <View className={style.title}>尚牛电竞用户协议</View>
      <View className={style.time}>2019-11-20 10:10:10</View>
      <View className={style.content}>
        <View>
          <Text className={style.text}>欢迎您使用尚牛电竞的服务!</Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            为使用尚牛电竞的服务，您应当阅读并遵守《尚牛电竞服务协议》(以下简称“本协议”)。请您务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款。限制、免责条款可能以黑体加粗形式提示您注意。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            除非您已阅读并接受本协议所有条款，否则您无权使用尚牛电竞提供的服务。您使用尚牛电竞的服务即视为您已阅读并同意上述协议的约束，用户不应再以不了解本协议内容为由拒绝履行本协议,因此，为保障您的权益，请于注册使用尚牛电竞所提供的各种产品和服务之前，仔细阅读本协议全文。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            如果您未满18周岁，请在法定监护人的陪同下阅读本协议，并特别注意未成年人使用条款。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>一、协议的范围</Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            1.
            本协议是您与尚牛电竞之间关于用户使用尚牛电竞相关服务所订立的协议。“尚牛电竞”是指厦门思冠科技有限公司及其相关服务可能存在的运营关联单位。“用户”是指使用尚牛电竞相关服务的使用人，在本协议中更多地称为“您”。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            2.
            本协议项下的具体服务内容是指尚牛电竞根据实际情况，向用户提供的包括但不限于虚拟物品交易商城、游戏预测、赛事参与平台、尚牛电竞社区(BBS)、新闻评论和广告等产品及服务(以下简称“本服务”)。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            3.您承诺以真实身份注册成为甲方用户，并保证所提供的个人身份资料信息真实、完整、有效，依据法律规定和必备条款约定对所提供的信息承担相应的法律责任。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            4.您以真实身份注册成为尚牛电竞用户后，需要修改说提供的个人身份资料信息的，尚牛电竞应当及时、有效地为其提供该项服务。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>二、帐号与密码安全</Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            1.
            您在使用尚牛电竞的服务时可能需要注册一个帐号。尚牛电竞特别提醒您应妥善保管您的帐号和密码。当您使用完毕后，应安全退出。因您保管不善可能导致遭受盗号或密码失窃，责任由您自行承担。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            2.
            您不应将自己的帐号、密码转让或出借予他人使用。如您发现自己的帐号遭他人非法使用，应立即通知尚牛电竞。并有权通知尚牛电竞采取措施暂停该账号的登录和使用。同时，您也应向尚牛电竞提供与被停用账号注册信息相一致的个人有效身份信息。尚牛电竞核实您所提供的个人有效身份信息与所注册的身份信息相一致的，应当及时采取措施暂停该账号的登录和使用。尚牛电竞违反前述约定，未及时采取措施暂停用户账号的登录和使用，因此而给您造成损失的，将有尚牛电竞承担。若您没有提供个人有效身份证件或者用户提供的个人有效身份信息与所注册的身份信息不一致的，尚牛电竞有权拒绝用户上述请求。此外，因黑客行为或您的保管疏忽导致帐号、密码遭他人非法使用，尚牛电竞不承担任何责任。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            3.
            您注册的帐号自注册起90天内或连续365天，没有使用过该帐号，则尚牛电竞有权删除该帐号，包括但不限于注册信息、等级信息、物品信息等一切与该注册帐号相关的信息，
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>三、用户账号使用与保管</Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            1.
            根据必备条款的约定，尚牛电竞有权审查您注册所提供的身份信息是否真实、有效，并应积极地采取技术与管理等合理措施保障您账号的安全、有效;您有义务妥善保管账号及密码，并正确、安全地使用账号及密码。任何一方未尽上述义务导致账号密码遗失、账号被盗等情形而给您和他人的民事权利造成损害的，应当承担由此产生的法律责任。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            2.您对登录后所持账号产生的行为依法享有权利和承担责任。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            3.您发现其账号或密码被他人非法使用或有使用异常的情况的，应及时根据尚牛电竞公布的处理方式通知尚牛电竞，并有权通知尚牛电竞采取措施暂停该账号的登录和使用。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            4.
            尚牛电竞根据您的通知采取措施暂停您账号的登录和使用的，尚牛电竞应当要求您提供并核实与其注册身份信息相一致的个人有效身份信息。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            4.1
            尚牛电竞核实您所提供的个人有效身份信息与所注册的身份信息相一致的，应当及时采取措施暂停您账号的登录和使用。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            4.2
            尚牛电竞违反本条4.1款项的约定，未及时采取措施暂停您账号的登录和使用，因此而给您造成损失的，应承担相应的法律责任。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            4.3
            您没有提供其个人有效身份证件或者您提供的个人有效身份证件与所注册的身份信息不一致的，尚牛电竞有权拒绝您上述请求。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            5
            您为了维护其合法权益，向尚牛电竞提供与所注册的身份信息相一致的个人有效身份信息时，尚牛电竞应当为您提供账号注册人证明、原始注册信息等必要的协助和支持，并根据需要向有关行政机关和司法机关提供相关证据信息资料。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>四、用户个人信息保护</Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            1. 保护您的个人信息是尚牛电竞的一项基本原则。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            2.
            您在注册帐号或使用本服务的过程中，可能需要填写一些必要的信息。若国家法律法规有特殊规定的，您需要填写真实的身份信息。若您填写的信息不完整，则无法使用本服务或在使用过程中受到限制。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            3.
            一般情况下，您可随时浏览、修改自己提交的信息，但出于安全性和身份识别(如号码申诉服务)的考虑，您可能无法修改注册时提供的初始注册信息及其他验证信息。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            4.
            尚牛电竞将运用各种安全技术和程序建立完善的管理制度来保护您的个人信息，以免遭受未经授权的访问、使用或披露。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            5.
            未经您的同意，尚牛电竞不会向尚牛电竞以外的任何公司、组织和个人披露您的个人信息，但法律法规另有规定的除外。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            6.
            尚牛电竞非常重视对未成年人个人信息的保护。若您是18周岁以下的未成年人，在使用尚牛电竞的服务前，应事先取得您家长或法定监护人(以下简称&quot;监护人&quot;)的书面同意。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            7.
            未经您许可尚牛电竞不得向任何第三方提供、公开或共享您注册资料中的姓名、个人有效身份证件号码、联系方式、家庭住址等个人身份信息，但下列情况除外：
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            7.1 您或您监护人授权尚牛电竞披露的;
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>7.2 有关法律要求尚牛电竞披露的;</Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            7.3 司法机关或行政机关基于法定程序要求尚牛电竞提供的;
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            7.4 尚牛电竞为了维护自己合法权益而向您提起诉讼或者仲裁时;
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            7.5 应您监护人的合法要求而提供您个人身份信息时。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>五、使用本服务的方式</Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            1. 您对登录后所持账号产生的行为依法享有权利和承担责任
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            2. 除非您与尚牛电竞另有约定，您同意本服务仅为您个人使用。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            3.
            您应当通过尚牛电竞提供或认可的方式使用本服务。您依本协议条款所取得的权利不可转让。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            4.
            您不得使用未经尚牛电竞授权的插件、外挂或第三方工具对本协议项下的服务进行干扰、破坏、修改或施加其他影响。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            5.
            您通过服务对程序的使用受制于某些已经包含在规则中的行为准则。这些规则将在尚牛电竞官方网站公开并不定期更新，所有通过服务使用程序的用户必须遵守。您有义务知晓、了解并遵守这些行为规则。尚牛电竞保留权利决定何种行为违反游戏精神，并对该等行为采取其认为合适的相应的处理措施(包括但不限于警告、扣除虚拟货币、暂时或永久冻结账号、拒绝提供服务等)。尚牛电竞保留随时修改这些行为规则的权利。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>六、按现状提供服务</Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            您理解并同意，尚牛电竞的服务是按照现有技术和条件所能达到的现状提供的。尚牛电竞会尽最大努力向您提供服务，确保服务的连贯性和安全性;但尚牛电竞不能随时预见和防范法律、技术以及其他风险，包括但不限于不可抗力、病毒、木马、黑客攻击、系统不稳定、第三方服务瑕疵、政府行为等原因可能导致的服务中断、数据丢失以及其他的损失和风险。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>七、自备设备</Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            1.
            您应当理解，您使用尚牛电竞的服务需自行准备与相关服务有关的终端设备(如电脑、调制解调器等装置)，并承担所需的费用(如电话费、上网费等费用)。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            2. 您理解并同意，您使用本服务时会耗用您的终端设备和带宽等资源。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>八、广告</Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            1.
            您理解并同意，尚牛电竞可以在提供服务的过程中自行或由第三方广告商向您发送广告、推广或宣传信息(包括商业与非商业信息)，其方式和范围可不经向您特别通知而变更。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            2.
            尚牛电竞依照法律的规定对广告商履行相关义务，您应当自行判断广告信息的真实性并为自己的判断行为负责，除法律明确规定外，您因依该广告信息进行的交易或前述广告商提供的内容而遭受的损失或损害，尚牛电竞不承担责任。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>九、收费服务</Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            1.
            尚牛电竞的部分服务是以收费方式提供的，相关页面上会有明确的提示，如您使用收费服务，请遵守相关的协议，如您不同意支付该等费用，可选择不接受相应的产品和服务。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            2.
            尚牛电竞可能根据实际需要对收费服务的收费标准、方式进行修改和变更，尚牛电竞也可能会对部分免费服务开始收费。前述修改、变更或开始收费前，尚牛电竞将在相应服务页面进行通知或公告。如果您不同意上述修改、变更或付费内容，则应停止使用该服务。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>十、第三方提供的产品或服务</Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            您在尚牛电竞平台上使用第三方提供的产品或服务时，除遵守本协议约定外，还应遵守第三方的用户协议。尚牛电竞和第三方对可能出现的纠纷在法律规定和约定的范围内各自承担责任。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>十一、本服务中的软件</Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            1.
            您在使用本服务的过程中可能需要下载软件，对于这些软件，尚牛电竞给予您一项个人的、不可转让及非排他性的许可。您仅可为访问或使用本服务的目的而使用这些软件。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            2.
            为了改善用户体验、保证服务的安全性及产品功能的一致性，尚牛电竞可能会对软件进行更新。您应该将相关软件更新到最新版本，否则尚牛电竞并不保证其能正常使用。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>十二、知识产权声明</Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            1.
            尚牛电竞在本服务中提供的内容(包括但不限于网页、文字、图片、音频、视频、图表等)的知识产权归尚牛电竞所有，您在使用本服务中所产生的内容的知识产权归您或相关权利人所有。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            2.
            除另有特别声明外，尚牛电竞提供本服务时所依托软件的著作权、专利权及其他知识产权均归尚牛电竞所有。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            3.
            尚牛电竞在本服务中所使用的“牛币”、“尚牛电竞”、尚牛电竞logo形象等商业标识，其著作权或商标权归尚牛电竞所有。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            4.
            上述及其他任何本服务包含的内容的知识产权均受到法律保护，未经尚牛电竞、您个人或相关权利人书面许可，任何人不得以任何形式进行使用或创造相关衍生作品。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>十三、用户违法行为</Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            1.
            您在使用本服务时须遵守法律法规，不得利用本服务从事违法违规行为，包括但不限于：
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            ( 1
            )发布、传送、传播、储存危害国家安全统一、破坏社会稳定、违反公序良俗、侮辱、诽谤、淫秽、暴力以及任何违反国家法律法规的内容;
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            ( 2
            )发布、传送、传播、储存侵害他人知识产权、商业秘密等合法权利的内容;
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            ( 3 )恶意虚构事实、隐瞒真相以误导、欺骗他人;
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            ( 4 )发布、传送、传播广告信息及垃圾信息;
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>( 5 )其他法律法规禁止的行为。</Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            2.
            如果您违反了本条约定，相关国家机关或机构可能会对您提起诉讼、罚款或采取其他制裁措施，并要求尚牛电竞给予协助。造成损害的，您应依法予以赔偿，尚牛电竞不承担任何责任。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            3.
            如果尚牛电竞发现或收到他人举报您发布的信息违反本条约定，尚牛电竞有权进行独立判断并采取技术手段予以删除、屏蔽或断开链接。同时，尚牛电竞有权视您的行为性质，采取包括但不限于暂停或终止服务，限制、冻结或终止尚牛电竞账号使用，追究法律责任等措施。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            4.
            您违反本条约定，导致任何第三方损害的，您应当独立承担责任;尚牛电竞因此遭受损失的，您也应当一并赔偿。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>十四、遵守当地法律监管</Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            1.
            您在使用本服务过程中应当遵守当地相关的法律法规，并尊重当地的道德和风俗习惯。如果您的行为违反了当地法律法规或道德风俗，您应当为此独立承担责任。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            2.
            您应避免因使用本服务而使尚牛电竞卷入政治和公共事件，否则尚牛电竞有权暂停或终止对您的服务。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            十五、用户发送、传播的内容与第三方投诉处理
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            1.
            您通过本服务发送或传播的内容(包括但不限于网页、文字、图片、音频、视频、图表等)均由您自行承担责任。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            2.
            您发送或传播的内容应有合法来源，相关内容为您所有或您已获得权利人的授权。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            3.
            您同意尚牛电竞可为履行本协议或提供本服务的目的而使用您发送或传播的内容。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            4.
            如果尚牛电竞收到权利人通知，主张您发送或传播的内容侵犯其相关权利的，您同意尚牛电竞有权进行独立判断并采取删除、屏蔽或断开链接等措施。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>十六、不可抗力及其他免责事由</Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            1.
            您理解并同意，在使用本服务的过程中，可能会遇到不可抗力等风险因素，使本服务发生中断。不可抗力是指不能预见、不能克服并不能避免且对一方或双方造成重大影响的客观事件，包括但不限于自然灾害如洪水、地震、瘟疫流行和风暴等以及社会事件如战争、动乱、政府行为等。出现上述情况时，尚牛电竞将努力在第一时间与相关单位配合，及时进行修复，但是由此给您造成的损失尚牛电竞在法律允许的范围内免责。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            2.
            在法律允许的范围内，尚牛电竞对以下情形导致的服务中断或受阻不承担责任：
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            ( 1 )受到计算机病毒、木马或其他恶意程序、黑客攻击的破坏;
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            ( 2 )您或尚牛电竞的电脑软件、系统、硬件和通信线路出现故障;
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>( 3 )您操作不当;</Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            ( 4 )您通过非尚牛电竞授权的方式使用本服务;
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            3.
            您理解并同意，在使用本服务的过程中，可能会遇到网络信息或其他用户行为带来的风险，尚牛电竞不对任何信息的真实性、适用性、合法性承担责任，也不对因侵权行为给您造成的损害负责。这些风险包括但不限于：
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            4. 来自他人匿名或冒名的含有威胁、诽谤、令人反感或非法内容的信息;
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            5.
            因使用本协议项下的服务，遭受他人误导、欺骗或其他导致或可能导致的任何心理、生理上的伤害以及经济上的损失;
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            6. 其他因网络信息或用户行为引起的风险。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            7.
            您理解并同意，本服务并非为某些特定目的而设计，包括但不限于核设施、军事用途、医疗设施、交通通讯等重要领域。如果因为软件或服务的原因导致上述操作失败而带来的人员伤亡、财产损失和环境破坏等，尚牛电竞不承担法律责任。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            8.
            尚牛电竞依据本协议约定获得处理违法违规内容的权利，该权利不构成尚牛电竞的义务或承诺，尚牛电竞不能保证及时发现违法行为或进行相应处理。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            9.
            在任何情况下，您不应轻信借款、索要密码或其他涉及财产的网络信息。涉及财产操作的，请一定先核实对方身份，并请经常留意尚牛电竞有关防范诈骗犯罪的提示。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>十七、协议的生效与变更</Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            1. 您使用尚牛电竞的服务即视为您已阅读本协议并接受本协议的约束。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            2.
            尚牛电竞有权在必要时修改本协议条款。您可以在相关服务页面查阅最新版本的协议条款。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            3.
            本协议条款变更后，如果您继续使用尚牛电竞提供的软件或服务，即视为您已接受修改后的协议。如果您不接受修改后的协议，应当停止使用尚牛电竞提供的软件或服务。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>十八、服务的变更、中断或终止</Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            1.
            鉴于网络服务的特殊性，您同意尚牛电竞有权随时变更、中断或终止部分或全部的网络服务(包括收费网络服务)。如变更、中断或终止的网络服务属于免费网络服务，尚牛电竞无需通知您，也无需对您或任何第三方承担任何责任;如变更、中断或终止的网络服务属于收费网络服务，尚牛电竞应当在变更、中断或终止之前事先通知您，并应向您提供等值的替代性的收费网络服务，如您不愿意接受替代性的收费网络服务，就您已经向尚牛电竞支付的服务费，尚牛电竞应当按照您实际使用相应收费网络服务的情况扣除相应服务费之后将剩余的服务费退还给您。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            2.
            您理解并同意，尚牛电竞需要定期或不定期地对提供网络服务的平台(如互联网网站、移动网络等)或相关的设备进行检修或者维护，如因此类情况而造成收费网络服务在合理时间内的中断，尚牛电竞无需为此承担任何责任，但尚牛电竞将尽可能事先进行通告。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            3.
            尚牛电竞服务(尤指但不仅指尚牛电竞虚拟物品交易平台及附带相关软件)的各个新版本，尚牛电竞可以自行决定是否保留为尚牛电竞服务增加附加特点和功能，或者提供程序编程之修补、更新和升级的权利。尚牛电竞无需向您发出通知即可自行决定修改、停止或暂停您对任何版本尚牛电竞服务的使用，和/或禁用您已经使用或安装的尚牛电竞服务，以便对相关技术进行检修、改良和/或升级，或者出于其他合理原因;对于由发行和/或不发行尚牛电竞服务的新版本而导致的直接或间接损害，尚牛电竞将不承担任何赔偿责任。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            4.
            如发生下列任何一种情形，尚牛电竞有权不经通知立即中断或终止向您提供的服务：
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            ( 1
            )根据法律规定您应提交真实信息，而您提供的个人资料不真实、或与注册时信息不一致又未能提供合理证明;
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            ( 2 )
            您有发布违法信息、严重违背社会公德、其他违反法律禁止性规定或违反本协议约定的行为;
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>( 3 )按照法律规定或主管部门的要求;</Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            ( 4 )出于安全的原因或其他必要的情形。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            5.
            您在接受尚牛电竞服务时实施不正当行为的，尚牛电竞有权终止对您提供服务。该不正当行为的具体情形应当在本协议中有明确约定或属于尚牛电竞事先明确告知的应被终止服务的禁止性行为，否则，尚牛电竞不得终止对您提供服务;
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            6.
            您提供虚假注册身份信息，或实施违反本协议的行为，尚牛电竞有权中止对您提供全部或部分服务;尚牛电竞采取中止措施应当通知您并告知中止期间，中止期间应该是合理的，中止期间届满尚牛电竞应当及时恢复对您的服务;
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            5.
            尚牛电竞有权按本协的约定进行收费。若您未按时足额付费，尚牛电竞有权中断、中止或终止提供服务。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            6.
            您有责任自行备份存储在本服务中的数据。如果您的服务被终止，尚牛电竞可以从服务器上永久地删除您的数据。服务终止后，尚牛电竞没有义务向您返还数据。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>十九、管辖与法律适用</Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            1. 本协议签订地为中华人民共和国福建省厦门市思明区。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            2.
            本协议的成立、生效、履行、解释及纠纷解决，适用中华人民共和国大陆地区法律(不包括冲突法)。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            3.
            若您和尚牛电竞之间发生任何纠纷或争议，首先应友好协商解决;协商不成的，您同意将纠纷或争议提交本协议签订地有管辖权的人民法院管辖。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            4.
            本协议所有条款的标题仅为阅读方便，本身并无实际涵义，不能作为本协议涵义解释的依据。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            5.
            本协议条款无论因何种原因部分无效或不可执行，其余条款仍有效，对双方具有约束力。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>二十、未成年人使用条款</Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            1.
            不论你的父母或监护人是否同意，你都必须是十八周岁以上才能使用本网站的服务。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            2.
            未成年人用户涉世未深，容易被网络虚象迷惑，且好奇心强，遇事缺乏随机应变的处理能力，很容易被别有用心的人利用而又缺乏自我保护能力。因此，未成年人用户在使用本服务时应注意以下事项，提高安全意识，加强自我保护：
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            3. 认清网络世界与现实世界的区别，避免沉迷于网络，影响日常的学习生活;
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            4. 填写个人资料时，加强个人保护意识，以免不良分子对个人生活造成骚扰;
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            5. 在监护人或老师的指导下，学习正确使用网络;
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            6.
            避免陌生网友随意会面或参与联谊活动，以免不法分子有机可乘，危及自身安全。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            7.
            监护人、学校均应对未成年人使用本服务时多做引导。特别是家长应关心子女的成长，注意与子女的沟通，指导子女上网应该注意的安全问题，防患于未然。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>二十一、其他</Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            本协议最终解释权归厦门思冠科技有限公司所有。
          </Text>
        </View>
        <View></View>
        <View>
          <Text className={style.text}>
            如果您对本协议或本服务有意见或建议，可与尚牛电竞客户服务部门联系，我们会给予您必要的帮助。
          </Text>
        </View>
      </View>
    </View>
  )
}

AgreeMent.config = {
  navigationBarTitleText: '尚牛电竞用户协议'
}

export default AgreeMent
