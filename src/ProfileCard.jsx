import React, { useState } from 'react';
import Header from './components/header';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widget';

const USER_PROFILES = {
    EMPRESA: {
        roleId: 1,
        name: "Innovación Tecnológica S.A.",
        roleText: "Empresa de Soluciones Digitales",
        headline: "Impulsamos la transformación digital con soluciones en la nube y IA.",
        location: "Ciudad de México, México",
        contactInfo: { email: "wvewvsfafa", phone: "+52 55 9876 5432" },
        about: "Somos una organización líder en el desarrollo de software y servicios en la nube. Con más de 10 años en el mercado, nos enfocamos en soluciones escalables y la satisfacción del cliente. Buscamos talento que comparta nuestra pasión por la tecnología.",
        profileImage: "https://placehold.co/100x100/1e90ff/ffffff?text=IT",
        backgroundImage: "https://placehold.co/800x200/58c0a8/ffffff?text=Fondo+local"
    },
    CANDIDATO: {
        roleId: 2,
        name: "María Fernanda Guzmán",
        roleText: "mama luchona",
        headline: "Experta en insultar a morena",
        location: "Guadalajara, México",
        contactInfo: { email: "wfwevsv", phone: "+52 33 1122 3344" },
        about: "Profesional con 8 años de experiencia en el ciclo de vida completo del desarrollo de aplicaciones web. Experiencia probada en la creación de interfaces de usuario robustas con React y APIs RESTful. Busco un rol donde pueda aplicar mi experiencia en arquitectura de sistemas.",
        profileImage: "https://placehold.co/100x100/0073b1/ffffff?text=MF",
    }
};

const ProfileStyles = () => (
    <style>{`
        .registerPage__container { padding: 40px 20px; display: flex; justify-content: center; }
        .registerPage__card { background-color: white; border-radius: 12px; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); width: 100%; max-width: 800px; overflow: hidden; margin-bottom: 20px; }
        .linkedin-header { position: relative; }
        .profile-picture { position: absolute; bottom: -60px; left: 24px; border: 4px solid white; border-radius: 50%; width: 120px; height: 120px; object-fit: cover; }
        @media (max-width: 600px) { .profile-picture { bottom: -50px; left: 15px; width: 100px; height: 100px; } }
        .section-box { background-color: white; padding: 32px 24px; margin-top: 10px; }
        .section-title { font-size: 22px; font-weight: 600; color: #333; margin-bottom: 20px; }
        .headline-text { color: #4b4b4b; font-size: 16px; margin-top: 8px; line-height: 1.5; }
        .about-text { line-height: 1.8; color: #4b4b4b; font-size: 16px; }
    `}</style>
);

function ProfileCard() {
    const [currentRole] = useState('EMPRESA');
    const profileData = USER_PROFILES[currentRole];
    const isCompany = currentRole === 'EMPRESA';

    const copyToClipboard = (text) => {
        const temp = document.createElement('textarea');
        temp.value = text;
        document.body.appendChild(temp);
        temp.select();
        try { document.execCommand('copy'); } catch (err) { console.error(err); }
        document.body.removeChild(temp);
    };

    return (
        <div className="app">
            <Header variant="dashboard" />
            <ProfileStyles />

            <div className="registerPage__container">
                <div className="registerPage__card">
                    <div className="linkedin-header mb-8">
                        <img src={profileData.backgroundImage} alt="Fondo de perfil" className="w-full h-48 object-cover rounded-t-lg" />
                        <img src={profileData.profileImage} alt="Foto de perfil" className="profile-picture" />

                        <div className="pt-20 px-8 pb-6">
                            <h1 className="text-3xl font-bold text-gray-800">{profileData.name}</h1>
                            <p className="text-xl text-gray-700 mt-1">{profileData.roleText}</p>
                            <p className="headline-text mb-6">{profileData.headline}</p>

                            <div className="flex items-center gap-2 text-gray-500 text-base">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>{profileData.location}</span>
                            </div>

                            <div className="flex flex-wrap gap-4 mt-6">
                                <button className="btn btn--primary px-8 py-2">
                                    {isCompany ? 'configuracion' : 'configuracion'}
                                </button>
                                <button className="btn btn--signin px-8 py-2 bg-white border border-gray-400 text-gray-700 hover:bg-gray-100" onClick={() => copyToClipboard(profileData.contactInfo.email)}>
                                    <i className="fas fa-envelope mr-2"></i> Contactar
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="section-box border-t border-gray-200">
                        <h3 className="section-title">Acerca de {isCompany ? 'la Empresa' : 'Mí'}</h3>
                        <p className="about-text">{profileData.about}</p>
                    </div>

                    <div className="section-box border-t border-gray-200">
                        <h3 className="section-title">Información de Contacto</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <i className="fas fa-envelope text-[#0073b1] mt-1 text-xl"></i>
                                <div>
                                    <p className="text-sm text-gray-500">Correo Electrónico</p>
                                    <a href={`mailto:${profileData.contactInfo.email}`} className="text-[#0073b1] hover:underline font-medium text-lg">
                                        {profileData.contactInfo.email}
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <i className="fas fa-phone text-[#0073b1] mt-1 text-xl"></i>
                                <div>
                                    <p className="text-sm text-gray-500">Teléfono</p>
                                    <span className="text-gray-700 font-medium text-lg">{profileData.contactInfo.phone}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
