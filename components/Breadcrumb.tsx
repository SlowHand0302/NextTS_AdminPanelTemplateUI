import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface BreadcrumnProps {
    homeHref?: string;
    HomeIcon?: string | ReactNode;
    Separator?: string | ReactNode;
}

function Breadcrumb({ homeHref = '/', Separator = '/', HomeIcon = 'Home' }: BreadcrumnProps) {
    const pathname = usePathname();
    const pathnames = pathname.split('/').filter((x) => x && x !== homeHref);

    return (
        <div className=" bg-white text-slate-300 flex gap-2 capitalize items-center justify-start">
            <Link href={homeHref} className="flex gap-2 items-center justify-center hover:text-slate-400">
                {HomeIcon}
            </Link>
            {Separator}
            {pathnames.map((path, index) => {
                const routeTo = `/${path}`;
                const isLast = index === pathnames.length - 1;

                return isLast ? (
                    <p key={index} className="capitalize text-black" aria-label={path}>
                        {path}
                    </p>
                ) : (
                    <>
                        <Link
                            key={index}
                            href={routeTo}
                            className="flex gap-2 items-center hover:text-slate-400"
                            aria-label={path}
                        >
                            {path}
                        </Link>
                        {Separator}
                    </>
                );
            })}{' '}
        </div>
    );
}

export default Breadcrumb;
