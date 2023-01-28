import React from 'react';
import FooterItem from './FooterItem';

import { FacebookOutlined, YoutubeOutlined, GithubOutlined } from '@ant-design/icons';
import icon from '~/api/image/logo.png';

export default function Footer() {
    return (
        <footer className="bg-footer-bg px-4 lg:px-2">
            <div className="max-w-screen mx-auto py-[100px] grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <section>
                    <div className="flex item-center">
                        <a href="http://hahuudev.online">
                            <img src={icon} width="120" alt="" className="mt-3" />
                        </a>
                        <h3 className="ml-4 text-white font-semibold text-xl">
                            Xem mọi thể loại phim tại web Hphim của Hữu
                        </h3>
                    </div>
                    <ul className="mt-5 flex flex-col space-y-2">
                        <li>
                            <FooterItem title="Điện thoại:" content="0788062672" />
                        </li>
                        <li>
                            <FooterItem title="Ủng hộ:" content="100801032002 (MB bank)" />
                        </li>
                        <li>
                            <FooterItem title="Email:" content="hahuudev02@gmail.com" link="/" />
                        </li>
                        <li>
                            <FooterItem title="Địa chỉ:" content="Hoàng Hoa - Tam Dương - Vĩnh Phúc" link="/" />
                        </li>
                    </ul>
                </section>

                <section>
                    <div className="flex item-center">
                        <h3 className="ml-4 text-white font-semibold text-xl">HỖ TRỢ</h3>
                    </div>
                    <ul className="mt-5 flex flex-col space-y-2">
                        <li>
                            <FooterItem
                                title={<FacebookOutlined className="text-2xl flex" />}
                                content="facebook"
                                link="https://www.facebook.com/huu.has.3/"
                            />
                        </li>
                        <li>
                            <FooterItem
                                title={<YoutubeOutlined className="text-2xl flex text-red-500" />}
                                content="Youtube"
                                link="/"
                            />
                        </li>
                        <li>
                            <FooterItem
                                title={<GithubOutlined className="text-2xl flex" />}
                                content="GitHub"
                                link="https://github.com/hahuudev-02"
                            />
                        </li>
                    </ul>
                </section>

                <section>
                    <div className="flex item-center">
                        <h3 className="ml-4 text-white font-semibold text-xl">VỀ HPHIM</h3>
                    </div>
                    <ul className="mt-5 flex flex-col space-y-2">
                        <li>
                            <FooterItem content="Giới thiệu" link="/about-us" />
                        </li>
                        <li>
                            <FooterItem content="Công việc" link="/" />
                        </li>
                        <li>
                            <FooterItem title="Website mẹ: " content="hahuudev.online" link="https://hahuudev.online" />
                        </li>
                        <li>
                            <FooterItem
                                title="Lĩnh vực: "
                                content="Web HPhim do Nguyễn Hà Hũu với vai trò admin. Mục đích đem đến những bộ phim mới và hay nhất cho khán giả. Cảm ơn đã ủng hộ"
                            />
                        </li>
                    </ul>
                </section>
            </div>
        </footer>
    );
}
